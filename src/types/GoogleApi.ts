export type GooglePolylineRoute = {
  polyline: {
    encodedPolyline: string;
  };
  distanceMeters: number;
  duration: string;
};

export type GoogleRoutesResponse = {
    routes: GooglePolylineRoute[];
    error?: string;
}
