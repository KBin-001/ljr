declare global {
  interface Window {
    AMap?: any;
    _AMapSecurityConfig?: {
      securityJsCode: string;
    };
  }
}

let amapPromise: Promise<any> | null = null;

export function loadAmap() {
  if (window.AMap) return Promise.resolve(window.AMap);
  if (amapPromise) return amapPromise;

  const key = import.meta.env.VITE_AMAP_JS_KEY;
  const securityJsCode = import.meta.env.VITE_AMAP_SECURITY_CODE;

  if (!key || !securityJsCode) {
    return Promise.reject(new Error("缺少高德 JS API Key 或 securityJsCode，请检查 GitHub Actions Secrets"));
  }

  window._AMapSecurityConfig = { securityJsCode };

  amapPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(
      key,
    )}&plugin=AMap.Scale,AMap.ToolBar,AMap.Geocoder,AMap.PlaceSearch`;
    script.async = true;
    script.onload = () => {
      if (window.AMap) {
        resolve(window.AMap);
        return;
      }
      reject(new Error("高德脚本已返回，但 AMap 未初始化，通常是 Key 或域名白名单问题"));
    };
    script.onerror = () => reject(new Error("高德地图 JS API 加载失败，请检查网络或域名白名单"));
    document.head.appendChild(script);
  });

  return amapPromise;
}

export async function searchPoiByJsApi(keyword: string, city = "深圳", timeoutMs = 8000) {
  const AMap = await loadAmap();

  return new Promise<{ lng: number; lat: number; formattedAddress?: string }>((resolve, reject) => {
    let settled = false;
    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error("JS API POI 搜索超时"));
    }, timeoutMs);

    const placeSearch = new AMap.PlaceSearch({
      city,
      citylimit: true,
      pageSize: 1,
      pageIndex: 1,
    });

    placeSearch.search(keyword, (status: string, result: any) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);

      const poi = result?.poiList?.pois?.[0];
      const location = poi?.location;

      if (status === "complete" && location) {
        resolve({
          lng: Number(location.lng),
          lat: Number(location.lat),
          formattedAddress: poi.address || poi.name || keyword,
        });
        return;
      }

      reject(new Error(result?.info || "JS API POI 搜索失败"));
    });
  });
}

export async function geocodeByJsApi(address: string, city = "深圳", timeoutMs = 8000) {
  const AMap = await loadAmap();

  return new Promise<{ lng: number; lat: number; formattedAddress?: string }>((resolve, reject) => {
    let settled = false;
    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      reject(new Error("JS API 地理编码超时"));
    }, timeoutMs);

    const geocoder = new AMap.Geocoder({ city });
    geocoder.getLocation(address, (status: string, result: any) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);

      const geocode = result?.geocodes?.[0];
      const location = geocode?.location;

      if (status === "complete" && location) {
        resolve({
          lng: Number(location.lng),
          lat: Number(location.lat),
          formattedAddress: geocode.formattedAddress || geocode.formatted_address || address,
        });
        return;
      }

      reject(new Error(result?.info || "JS API 地理编码失败"));
    });
  });
}

type NavigationTarget = {
  name: string;
  lng: number;
  lat: number;
};

export function buildAmapAppNavigationUrl(shop: NavigationTarget) {
  const params = new URLSearchParams({
    sourceApplication: "深圳门店路线规划",
    dname: shop.name,
    dlat: String(shop.lat),
    dlon: String(shop.lng),
    dev: "0",
    t: "0",
  });

  return `amapuri://route/plan/?${params.toString()}`;
}

export function buildAmapWebNavigationUrl(shop: NavigationTarget) {
  const params = new URLSearchParams({
    sourceApplication: "深圳门店路线规划",
    to: `${shop.lng},${shop.lat},${shop.name}`,
    dev: "0",
    mode: "walk",
  });

  return `https://uri.amap.com/navigation?${params.toString()}`;
}

export function openAmapNavigation(shop: NavigationTarget) {
  const appUrl = buildAmapAppNavigationUrl(shop);
  const webUrl = buildAmapWebNavigationUrl(shop);
  let shouldFallback = true;

  const cancelFallback = () => {
    shouldFallback = false;
  };

  window.addEventListener("pagehide", cancelFallback, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      shouldFallback = false;
    }
  }, { once: true });

  window.location.href = appUrl;

  window.setTimeout(() => {
    if (shouldFallback) {
      window.location.href = webUrl;
    }
  }, 1200);
}
