import { useMemo, useState } from "react";
import {
  DUPLICATE_SHOP_COUNT,
  EXCLUDED_SHOP_COUNT,
  PLANNED_SHOP_COUNT,
  ROUTE_START_POINT,
  plannedDays,
} from "./data/precomputedRoutes";
import { openAmapNavigation } from "./utils/amap";

type RouteDay = (typeof plannedDays)[number];

function previewName(point: { name: string; rawName?: string; order?: number }) {
  if (point.order === 0) return "宝田一路";
  return point.rawName || point.name.replace(/^肯德基|^必胜客|^肯悦咖啡/, "");
}

function OfflineRouteMap({ day }: { day: RouteDay }) {
  const points = [
    { ...ROUTE_START_POINT, order: 0, label: "起" },
    ...day.shops.map((shop) => ({ ...shop, label: String(shop.order) })),
  ];
  const lngs = points.map((point) => point.lng);
  const lats = points.map((point) => point.lat);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const width = 360;
  const height = 260;
  const padding = 34;
  const lngRange = Math.max(maxLng - minLng, 0.001);
  const latRange = Math.max(maxLat - minLat, 0.001);

  const projected = points.map((point) => ({
    ...point,
    x: padding + ((point.lng - minLng) / lngRange) * (width - padding * 2),
    y: height - padding - ((point.lat - minLat) / latRange) * (height - padding * 2),
  }));

  return (
    <section className="offline-map-card" aria-label="当天离线路线图">
      <div className="offline-map-head">
        <strong>静态路线预览</strong>
        <span>固定图片式预览，不需要拖动地图；按起点到 1-5 的访问顺序绘制。</span>
      </div>
      <svg className="static-preview" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="当天静态路线预览图">
        <rect width={width} height={height} rx="8" />
        <path className="preview-grid" d="M34 52H326M34 104H326M34 156H326M34 208H326M92 34V226M150 34V226M208 34V226M266 34V226" />
        <polyline points={projected.map((point) => `${point.x},${point.y}`).join(" ")} />
        {projected.map((point) => (
          <g key={`${point.label}-${point.name}`} transform={`translate(${point.x} ${point.y})`}>
            <circle className={point.order === 0 ? "start-dot" : "shop-dot"} r="15" />
            <text>{point.label}</text>
          </g>
        ))}
        {projected.map((point, index) => {
          const labelX = point.x < width / 2 ? point.x + 21 : point.x - 21;
          const labelY = Math.max(22, Math.min(height - 12, point.y + (index % 2 === 0 ? -18 : 24)));
          return (
            <text
              className="point-name"
              key={`name-${point.label}-${point.name}`}
              x={labelX}
              y={labelY}
              textAnchor={point.x < width / 2 ? "start" : "end"}
            >
              {previewName(point)}
            </text>
          );
        })}
      </svg>
      <div className="preview-legend">
        {day.shops.map((shop) => (
          <span key={shop.code}>
            {shop.order}. {previewName(shop)}
          </span>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const currentPlan = plannedDays[currentDay - 1];
  const dayOptions = useMemo(() => plannedDays, []);

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

      {currentPlan && <OfflineRouteMap day={currentPlan} />}
    </main>
  );
}
