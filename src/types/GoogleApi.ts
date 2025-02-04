export type GooglePolylineRoute = {
  polyline: {
    encodedPolyline: string;
  };
  distanceMeters: number;
  duration: number;
  error?: string;
};
