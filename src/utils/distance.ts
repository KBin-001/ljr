export type Coordinate = {
  lng: number;
  lat: number;
};

const EARTH_RADIUS_KM = 6371.0088;

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

export function distanceKm(a: Coordinate, b: Coordinate) {
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

export function pathDistanceKm(points: Coordinate[]) {
  return points.reduce((sum, point, index) => {
    if (index === 0) return sum;
    return sum + distanceKm(points[index - 1], point);
  }, 0);
}

export function pathDistanceFromStartKm(start: Coordinate, points: Coordinate[]) {
  if (points.length === 0) return 0;
  return distanceKm(start, points[0]) + pathDistanceKm(points);
}

export function transitBikeMinutes(a: Coordinate, b: Coordinate) {
  const km = distanceKm(a, b);

  if (km <= 3) {
    return (km / 13) * 60 + 4;
  }

  const bikeAccessKm = Math.min(2.4, km * 0.28);
  const metroKm = Math.max(0, km - bikeAccessKm);
  const bikeMinutes = (bikeAccessKm / 12) * 60;
  const metroMinutes = (metroKm / 30) * 60;
  const transferPenalty = km > 12 ? 18 : 12;

  return bikeMinutes + metroMinutes + transferPenalty;
}

export function transitBikePathMinutes(start: Coordinate, points: Coordinate[]) {
  return points.reduce((sum, point, index) => {
    const from = index === 0 ? start : points[index - 1];
    return sum + transitBikeMinutes(from, point);
  }, 0);
}
