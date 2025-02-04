export type GooglePolylineRoute = {
  polyline: {
    encodedPolyline: string;
  };
  distanceMeters: number;
  duration: number;
};

export type GoogleRoutesResponse = {
    routes: GooglePolylineRoute[];
    error?: string;
}
