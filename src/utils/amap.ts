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
    return Promise.reject(new Error("缺少高德 JS API Key 或 securityJsCode"));
  }

  window._AMapSecurityConfig = { securityJsCode };

  amapPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(
      key,
    )}&plugin=AMap.Scale,AMap.ToolBar,AMap.Geocoder,AMap.PlaceSearch`;
    script.async = true;
    script.onload = () => resolve(window.AMap);
    script.onerror = () => reject(new Error("高德地图 JS API 加载失败"));
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

export function buildAmapNavigationUrl(shop: { name: string; lng: number; lat: number }) {
  const params = new URLSearchParams({
    sourceApplication: "深圳门店路线规划",
    poiname: shop.name,
    lat: String(shop.lat),
    lon: String(shop.lng),
    dev: "0",
    style: "2",
  });

  return `https://uri.amap.com/navigation?${params.toString()}`;
}
