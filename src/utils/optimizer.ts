import { distanceKm, pathDistanceFromStartKm, pathDistanceKm, transitBikePathMinutes } from "./distance";
import type { Coordinate } from "./distance";
import type { Shop, ShopWithCoord } from "../data/shops";

export type PlannedShop = ShopWithCoord & {
  order: number;
};

export type PlannedDay = {
  day: number;
  distanceKm: number;
  estimatedMinutes: number;
  shops: PlannedShop[];
};

function centroid(shops: ShopWithCoord[]) {
  return {
    lng: shops.reduce((sum, shop) => sum + shop.lng, 0) / shops.length,
    lat: shops.reduce((sum, shop) => sum + shop.lat, 0) / shops.length,
  };
}

function pickEdgeShop(shops: ShopWithCoord[]) {
  const center = centroid(shops);
  return shops.reduce((edge, shop) =>
    distanceKm(shop, center) > distanceKm(edge, center) ? shop : edge,
  );
}

function permutations<T>(items: T[]): T[][] {
  if (items.length <= 1) return [items];

  return items.flatMap((item, index) => {
    const rest = items.filter((_, restIndex) => restIndex !== index);
    return permutations(rest).map((tail) => [item, ...tail]);
  });
}

export function optimizeDayOrder(shops: ShopWithCoord[], routeStart?: Coordinate): PlannedShop[] {
  if (shops.length <= 1) {
    return shops.map((shop, index) => ({ ...shop, order: index + 1 }));
  }

  const best = permutations(shops).reduce(
    (currentBest, candidate) => {
      const distance = pathDistanceKm(candidate);
      const score = routeStart ? transitBikePathMinutes(routeStart, candidate) : distance;
      return score < currentBest.distance
        ? { shops: candidate, distance: score }
        : currentBest;
    },
    { shops, distance: Number.POSITIVE_INFINITY },
  );

  return best.shops.map((shop, index) => ({ ...shop, order: index + 1 }));
}

export function planRoutes(shops: ShopWithCoord[], perDay = 5, routeStart?: Coordinate): PlannedDay[] {
  const remaining = [...shops];
  const groups: ShopWithCoord[][] = [];

  while (remaining.length > 0) {
    const start = pickEdgeShop(remaining);
    const nearest = [...remaining]
      .sort((a, b) => distanceKm(start, a) - distanceKm(start, b))
      .slice(0, perDay);

    groups.push(nearest);

    const assigned = new Set(nearest.map((shop) => shop.code));
    for (let index = remaining.length - 1; index >= 0; index -= 1) {
      if (assigned.has(remaining[index].code)) {
        remaining.splice(index, 1);
      }
    }
  }

  return groups
    .map((group) => {
      const ordered = optimizeDayOrder(group, routeStart);
      const distance = routeStart ? pathDistanceFromStartKm(routeStart, ordered) : pathDistanceKm(ordered);
      const estimatedMinutes = routeStart ? transitBikePathMinutes(routeStart, ordered) : distance * 5;
      return {
        distanceKm: Number(distance.toFixed(2)),
        estimatedMinutes: Math.round(estimatedMinutes),
        shops: ordered,
      };
    })
    .sort((a, b) => {
      if (!routeStart) return 0;
      return distanceKm(routeStart, a.shops[0]) - distanceKm(routeStart, b.shops[0]);
    })
    .map((day, index) => ({
      ...day,
      day: index + 1,
    }));
}

export function mergeCoords(shops: Shop[], coords: Record<string, { lng: number; lat: number }>) {
  return shops.flatMap((shop) => {
    const coord = coords[shop.code];
    return coord ? [{ ...shop, ...coord }] : [];
  });
}
