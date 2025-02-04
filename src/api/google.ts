import {createClient, createRoute} from "@client.ts/core";
import {LatLng} from "react-native-maps";
import {GoogleRoutesResponse} from "../types/GoogleApi";

export const createGoogleMapsRoutesClient = (apiKey: string) => {
    return createClient("https://routes.googleapis.com", {
        directions: {
            prefix: "/directions",
            routes: {
                compute: createRoute<GoogleRoutesResponse>().dynamic((
                    origin: LatLng,
                    destination: LatLng,
                    mode: "DRIVE" | "BICYCLE" | "TWO_WHEELER" | "WALK"
                ) => {
                    return {
                        route: "POST /v2:computeRoutes",
                        body: {
                            origin: {
                                location: {
                                    latLng: origin,
                                },
                            },
                            destination: {
                                location: {
                                    latLng: destination,
                                },
                            },
                            travelMode: mode || "WALK",
                        },
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
}
