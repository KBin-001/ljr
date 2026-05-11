import { useEffect, useMemo, useRef, useState } from "react";
import {
  DUPLICATE_SHOP_COUNT,
  EXCLUDED_SHOP_COUNT,
  PLANNED_SHOP_COUNT,
  ROUTE_START_POINT,
  plannedDays,
} from "./data/precomputedRoutes";
import { loadAmap, openAmapNavigation } from "./utils/amap";

export default function App() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [currentDay, setCurrentDay] = useState(1);
  const currentPlan = plannedDays[currentDay - 1];
  const dayOptions = useMemo(() => plannedDays, []);

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
          position: [ROUTE_START_POINT.lng, ROUTE_START_POINT.lat],
          anchor: "center",
          content: `<div class="start-marker">起</div>`,
          title: ROUTE_START_POINT.name,
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
            [ROUTE_START_POINT.lng, ROUTE_START_POINT.lat],
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
      .catch(() => {
        // The route list remains usable even if the map script is blocked.
      });

    return () => {
      cancelled = true;
      if (map) map.destroy();
    };
  }, [currentPlan]);

  return (
    <main className="app-shell">
      <header className="top-panel">
        <div>
          <h1>深圳门店路线规划</h1>
          <p>路线已预计算封装：已去除光明区、宝安区和重复门店，线上只展示结果。</p>
        </div>

        <div className="stats-grid">
          <div>
            <span>规划门店数</span>
            <strong>{PLANNED_SHOP_COUNT}</strong>
          </div>
          <div>
            <span>已排除</span>
            <strong>{EXCLUDED_SHOP_COUNT}</strong>
          </div>
          <div>
            <span>已去重</span>
            <strong>{DUPLICATE_SHOP_COUNT}</strong>
          </div>
          <div>
            <span>已生成天数</span>
            <strong>{plannedDays.length}</strong>
          </div>
          <div>
            <span>当前第几天</span>
            <strong>{currentDay}</strong>
          </div>
          <div>
            <span>每日起点</span>
            <strong className="start-name">宝田一路</strong>
          </div>
        </div>
      </header>

      <section className="actions" aria-label="路线操作">
        <button
          type="button"
          onClick={() => setCurrentDay((day) => Math.max(1, day - 1))}
          disabled={currentDay <= 1}
        >
          上一天
        </button>
        <button
          type="button"
          onClick={() => setCurrentDay((day) => Math.min(plannedDays.length, day + 1))}
          disabled={currentDay >= plannedDays.length}
        >
          下一天
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
        {currentPlan?.shops.map((shop) => (
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
        ))}
      </section>
    </main>
  );
}
