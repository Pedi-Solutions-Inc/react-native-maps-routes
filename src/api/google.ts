import {createClient, createRoute} from "@client.ts/core";
import {LatLng} from "react-native-maps";
import {GoogleRoutesResponse} from "../types/GoogleApi";

export const googleMapsClient = createClient("https://routes.googleapis.com", {
    directions: {
        prefix: "/directions",
        routes: {
            compute: createRoute<GoogleRoutesResponse>().dynamic((
                apiKey: string,
                origin: LatLng,
                destination: LatLng,
                mode: "DRIVE" | "BICYCLE" | "TWO_WHEELER" | "WALK",
                routingPreference?: "TRAFFIC_AWARE" | "TRAFFIC_UNAWARE" | "TRAFFIC_AWARE_OPTIMAL",
                polylineQuality?: "HIGH_QUALITY" | "OVERVIEW",
                units?: "METRIC" | "IMPERIAL",
                languageCode?: string,
                requestedReferenceRoutes?: ("FUEL_EFFICIENT" | "SHORTER_DISTANCE")[]
            ) => {
                const body: any = {
                    origin: {
                        location: {
                            latLng: {
                                latitude: origin.latitude,
                                longitude: origin.longitude
                            },
                        },
                    },
                    destination: {
                        location: {
                            latLng: {
                                latitude: destination.latitude,
                                longitude: destination.longitude,
                            },
                        },
                    },
                    travelMode: mode || "WALK",
                }
                if (languageCode) {
                    body.languageCode = languageCode
                }
                if (units) {
                    body.units = units
                }
                if (polylineQuality){
                    body.polylineQuality = polylineQuality
                }
                if (routingPreference) {
                    body.routingPreference = routingPreference
                }
                if (requestedReferenceRoutes) {
                    body.requestedReferenceRoutes = requestedReferenceRoutes
                }
                return {
                    route: "POST /v2:computeRoutes",
                    body,
                    headers: {
                        "Content-Type": "application/json",
                        "X-Goog-Api-Key": apiKey,
                        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
                    },
                }
            })
        }
    }
})
