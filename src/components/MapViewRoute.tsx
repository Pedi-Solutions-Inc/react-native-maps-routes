import React from "react";

import { LatLng, LineCapType, LineJoinType, Polyline } from "react-native-maps";

type Props = {
  coordinates: LatLng[],
  strokeColor?: string;
  strokeWidth?: number;
  lineJoin?: LineJoinType;
  lineCap?: LineCapType;
};

export const MapViewRoute: React.FC<Props> = (props) => {
  return (
    <Polyline
      coordinates={props.coordinates}
      strokeColor={props.strokeColor ?? "#000"}
      strokeWidth={props.strokeWidth ?? 6}
      lineJoin={props.lineJoin ?? "round"}
      lineCap={props.lineCap ?? "round"}
    />
  );
};
