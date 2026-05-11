import type { Shop } from "../data/shops";

type Coord = {
  lng: number;
  lat: number;
  formattedAddress?: string;
};

const districtAnchors: Record<string, { lng: number; lat: number }> = {
  "宝安区": { lng: 113.824, lat: 22.737 },
  "福田区": { lng: 114.059, lat: 22.543 },
  "光明区": { lng: 113.945, lat: 22.755 },
  "南山区": { lng: 113.936, lat: 22.535 },
};

const roadOffsets: Array<[string, { lng: number; lat: number }]> = [
  ["沙井街道", { lng: -0.012, lat: 0.006 }],
  ["福田路", { lng: 0.012, lat: -0.004 }],
  ["金田路", { lng: 0.028, lat: 0.002 }],
  ["凤凰街道", { lng: 0.004, lat: 0.012 }],
  ["公明街道", { lng: -0.012, lat: 0.004 }],
  ["光明大道", { lng: 0.01, lat: -0.006 }],
  ["新湖街道", { lng: 0.016, lat: 0.01 }],
  ["玉塘街道", { lng: -0.006, lat: -0.01 }],
  ["滨海大道", { lng: -0.018, lat: -0.012 }],
  ["华侨城路", { lng: 0.004, lat: 0.006 }],
  ["科技园路", { lng: 0.012, lat: 0.002 }],
  ["南海大道", { lng: -0.014, lat: -0.004 }],
  ["南山大道", { lng: -0.008, lat: 0.008 }],
  ["粤海街道", { lng: 0.016, lat: 0.012 }],
];

function addressNumber(address: string) {
  const match = address.match(/(\d+)(?:[A-Z])?号/);
  return match ? Number(match[1]) : 0;
}

export function estimateShopCoord(shop: Shop, index: number): Coord {
  const anchor = districtAnchors[shop.district] || { lng: 114.0579, lat: 22.5431 };
  const roadOffset = roadOffsets.find(([keyword]) => shop.address.includes(keyword))?.[1] || {
    lng: 0,
    lat: 0,
  };
  const number = addressNumber(shop.address);

  const alongRoad = number * 0.00042;
  const lane = (index % 5) * 0.00065;
  const jitter = ((index * 37) % 19) * 0.00008;

  return {
    lng: Number((anchor.lng + roadOffset.lng + alongRoad + jitter).toFixed(6)),
    lat: Number((anchor.lat + roadOffset.lat + lane - alongRoad * 0.28).toFixed(6)),
    formattedAddress: shop.address,
  };
}

export function buildFallbackCoords(shops: Shop[]) {
  return Object.fromEntries(shops.map((shop, index) => [shop.code, estimateShopCoord(shop, index)]));
}
