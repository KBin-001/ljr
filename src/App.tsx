import { useEffect, useMemo, useRef, useState } from "react";
import { shops } from "./data/shops";
import type { Shop } from "./data/shops";
import { geocodeByJsApi, loadAmap, openAmapNavigation, searchPoiByJsApi } from "./utils/amap";
import { buildFallbackCoords, estimateShopCoord } from "./utils/fallbackCoords";
import { mergeCoords, planRoutes } from "./utils/optimizer";
import type { PlannedDay } from "./utils/optimizer";
import { ROUTE_START } from "./utils/routeStart";

type CoordCache = Record<string, { lng: number; lat: number; formattedAddress?: string }>;

type GeocodeResponse =
  | { success: true; lng: number; lat: number; formattedAddress?: string }
  | { success: false; message: string };

const EXCLUDED_DISTRICTS = new Set(["光明区", "宝安区"]);
const routeShops = shops.filter((shop) => !EXCLUDED_DISTRICTS.has(shop.district));
const excludedCount = shops.length - routeShops.length;
const COORD_CACHE_KEY = "sz-route-planner:coords:no-baoan-guangming:v3";
const DAYS_CACHE_KEY = "sz-route-planner:days:no-baoan-guangming:baotian-start:v3";
const FALLBACK_NOTICE =
  "已去除光明区、宝安区，并按宝田一路出发规划；顺序按地铁+骑车时间模型优化。";

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

function buildDaysFromCoords(coords: CoordCache) {
  return planRoutes(mergeCoords(routeShops, coords), 5, ROUTE_START);
}

function initialRouteState() {
  const cachedCoords = readJson<CoordCache>(COORD_CACHE_KEY, {});
  const coords = Object.keys(cachedCoords).length > 0 ? cachedCoords : buildFallbackCoords(routeShops);
  const cachedDays = readJson<PlannedDay[]>(DAYS_CACHE_KEY, []);
  const days = cachedDays.length > 0 ? cachedDays : buildDaysFromCoords(coords);

  if (cachedDays.length === 0) {
    saveJson(DAYS_CACHE_KEY, days);
  }

  return { coords, days };
}

async function geocodeShop(shop: Shop) {
  try {
    return await searchPoiByJsApi(`${shop.name} ${shop.district}`, "深圳");
  } catch {
    // Some shop names are generic; fall back to address geocoding next.
  }

  try {
    return await geocodeByJsApi(shop.address, "深圳");
  } catch {
    // If the JS API key is unavailable, try the Cloudflare Web服务 proxy as a fallback.
  }

  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 5000);
    const response = await fetch("/api/geocode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({ address: shop.address, city: "深圳" }),
    });
    window.clearTimeout(timeout);

    const data = (await response.json()) as GeocodeResponse;
    if (data.success) {
      return {
        lng: data.lng,
        lat: data.lat,
        formattedAddress: data.formattedAddress,
      };
    }
  } catch {
  }

  throw new Error(`${shop.name}: 地理编码失败`);
}

export default function App() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const initialState = useMemo(() => initialRouteState(), []);
  const [coords, setCoords] = useState<CoordCache>(initialState.coords);
  const [days, setDays] = useState<PlannedDay[]>(initialState.days);
  const [currentDay, setCurrentDay] = useState(1);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(FALLBACK_NOTICE);

  const currentPlan = days[currentDay - 1];
  const locatedCount = routeShops.filter((shop) => coords[shop.code]).length;
  const dayOptions = useMemo(() => days.slice(0, 20), [days]);

  useEffect(() => {
    if (!mapRef.current) return;

    let map: any;
    let cancelled = false;

    loadAmap()
      .then((AMap) => {
        if (cancelled || !mapRef.current) return;

        map = new AMap.Map(mapRef.current, {
          zoom: 12,
          resizeEnable: true,
          viewMode: "2D",
        });

        map.addControl(new AMap.Scale());
        map.addControl(new AMap.ToolBar({ position: "RB" }));

        if (!currentPlan?.shops.length) return;

        const startMarker = new AMap.Marker({
          position: [ROUTE_START.lng, ROUTE_START.lat],
          anchor: "center",
          content: `<div class="start-marker">起</div>`,
          title: ROUTE_START.name,
        });

        const markers = currentPlan.shops.map((shop) => {
          return new AMap.Marker({
            position: [shop.lng, shop.lat],
            anchor: "center",
            content: `<div class="map-marker">${shop.order}</div>`,
            title: shop.name,
          });
        });

        const polyline = new AMap.Polyline({
          path: [
            [ROUTE_START.lng, ROUTE_START.lat],
            ...currentPlan.shops.map((shop) => [shop.lng, shop.lat]),
          ],
          strokeColor: "#1677ff",
          strokeWeight: 5,
          strokeOpacity: 0.9,
          lineJoin: "round",
          lineCap: "round",
        });

        map.add([startMarker, ...markers, polyline]);
        map.setFitView([startMarker, ...markers, polyline], false, [54, 32, 32, 32]);
      })
      .catch((error) => {
        setStatus(error instanceof Error ? error.message : "地图加载失败");
      });

    return () => {
      cancelled = true;
      if (map) map.destroy();
    };
  }, [currentPlan]);

  async function refreshCoords() {
    setBusy(true);
      setStatus("正在按店名搜索高德坐标，完成后按地铁+骑车时间模型重排。已完成 0 家。");

    const nextCoords: CoordCache = {};
    let completedCount = 0;
    let fallbackCount = 0;
    let nextIndex = 0;

    try {
      async function runWorker() {
        while (nextIndex < routeShops.length) {
          const index = nextIndex;
          nextIndex += 1;
          const shop = routeShops[index];

        try {
          nextCoords[shop.code] = await geocodeShop(shop);
        } catch {
          nextCoords[shop.code] = estimateShopCoord(shop, index);
          fallbackCount += 1;
        }

          completedCount += 1;
        saveJson(COORD_CACHE_KEY, nextCoords);
        setCoords({ ...nextCoords });
        setStatus(
            `正在按店名搜索高德坐标，已完成 ${completedCount} / ${routeShops.length} 家；${fallbackCount} 家使用兜底坐标。`,
        );
      }
      }

      await Promise.all(Array.from({ length: 4 }, () => runWorker()));

      localStorage.removeItem(DAYS_CACHE_KEY);
      const planned = buildDaysFromCoords(nextCoords);
      saveJson(DAYS_CACHE_KEY, planned);
      setDays(planned);
      setCurrentDay(1);
      setStatus(
        `已去除光明区、宝安区，按地铁+骑车模型规划 ${planned.length} 天；${fallbackCount} 家使用兜底坐标。`,
      );
    } catch (error) {
      const fallbackCoords = buildFallbackCoords(routeShops);
      const planned = buildDaysFromCoords(fallbackCoords);
      saveJson(DAYS_CACHE_KEY, planned);
      setCoords(fallbackCoords);
      setDays(planned);
      setCurrentDay(1);
      setStatus(
        `高德坐标刷新失败，已保留内置路线。原因：${
          error instanceof Error ? error.message : "坐标生成失败"
        }`,
      );
    } finally {
      setBusy(false);
    }
  }

  function buildPlan() {
    const nextCoords = Object.keys(coords).length > 0 ? coords : buildFallbackCoords(routeShops);
    const locatedShops = mergeCoords(routeShops, nextCoords);
    if (locatedShops.length === 0) {
      setStatus("还没有坐标，请先生成坐标。");
      return;
    }

    const planned = planRoutes(locatedShops, 5, ROUTE_START);
    saveJson(DAYS_CACHE_KEY, planned);
    setCoords(nextCoords);
    setDays(planned);
    setCurrentDay(1);
    setStatus(
      `已去除光明区、宝安区，并按地铁+骑车模型规划 ${planned.length} 天；${routeShops.length - locatedShops.length} 家缺少坐标。`,
    );
  }

  function clearCache() {
    localStorage.removeItem(COORD_CACHE_KEY);
    localStorage.removeItem(DAYS_CACHE_KEY);
    const fallbackCoords = buildFallbackCoords(routeShops);
    const planned = buildDaysFromCoords(fallbackCoords);
    saveJson(DAYS_CACHE_KEY, planned);
    setCoords(fallbackCoords);
    setDays(planned);
    setCurrentDay(1);
    setStatus(`缓存已清除，已排除 ${excludedCount} 家光明区/宝安区门店并重新规划 ${planned.length} 天。`);
  }

  return (
    <main className="app-shell">
      <header className="top-panel">
        <div>
          <h1>深圳门店路线规划</h1>
          <p>{status}</p>
        </div>

        <div className="stats-grid">
          <div>
            <span>规划门店数</span>
            <strong>{routeShops.length}</strong>
          </div>
          <div>
            <span>已排除</span>
            <strong>{excludedCount}</strong>
          </div>
          <div>
            <span>已生成天数</span>
            <strong>{days.length}</strong>
          </div>
          <div>
            <span>当前第几天</span>
            <strong>{currentDay}</strong>
          </div>
          <div>
            <span>已有坐标</span>
            <strong>{locatedCount}</strong>
          </div>
          <div>
            <span>每日起点</span>
            <strong className="start-name">宝田一路</strong>
          </div>
        </div>
      </header>

      <section className="actions" aria-label="路线操作">
        <button type="button" onClick={refreshCoords} disabled={busy}>
          {busy ? "生成中..." : "生成/刷新坐标"}
        </button>
        <button type="button" onClick={buildPlan} disabled={busy}>
          自动规划每天5家
        </button>
        <button
          type="button"
          onClick={() => setCurrentDay((day) => Math.max(1, day - 1))}
          disabled={busy || currentDay <= 1}
        >
          上一天
        </button>
        <button
          type="button"
          onClick={() => setCurrentDay((day) => Math.min(days.length || 1, day + 1))}
          disabled={busy || currentDay >= days.length}
        >
          下一天
        </button>
        <button type="button" className="ghost" onClick={clearCache} disabled={busy}>
          清除缓存
        </button>
      </section>

      {dayOptions.length > 0 && (
        <nav className="day-tabs" aria-label="选择天数">
          {dayOptions.map((day) => (
            <button
              type="button"
              key={day.day}
              className={day.day === currentDay ? "active" : ""}
              onClick={() => setCurrentDay(day.day)}
            >
              第{day.day}天
            </button>
          ))}
        </nav>
      )}

      <section className="map-card">
        <div ref={mapRef} className="map" />
      </section>

      <section className="day-summary">
        <div>
          <span>当天门店</span>
          <strong>{currentPlan?.shops.length ?? 0} 家</strong>
        </div>
        <div>
          <span>数学路程</span>
          <strong>{currentPlan ? `${currentPlan.distanceKm.toFixed(2)} km` : "--"}</strong>
        </div>
        <div>
          <span>估算用时</span>
          <strong>{currentPlan ? `${currentPlan.estimatedMinutes} 分钟` : "--"}</strong>
        </div>
      </section>

      <section className="shop-list" aria-label="当天门店列表">
        {currentPlan?.shops.length ? (
          currentPlan.shops.map((shop) => (
            <article className="shop-card" key={`${shop.code}-${shop.order}`}>
              <div className="order-badge">{shop.order}</div>
              <div className="shop-content">
                <div className="shop-title">
                  <h2>{shop.name}</h2>
                  <span>{shop.code}</span>
                </div>
                <p>{shop.district}</p>
                <p>{shop.address}</p>
                <div className="shop-meta">
                  <span>{shop.type}</span>
                  <button type="button" onClick={() => openAmapNavigation(shop)}>
                    打开高德导航
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="empty-card">还没有当天路线。生成坐标后，点击“自动规划每天5家”。</div>
        )}
      </section>
    </main>
  );
}
