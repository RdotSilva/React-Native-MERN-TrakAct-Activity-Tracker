import { useContext } from "react";
import { Context as TrackContext } from "../context/trackContext";
import { Context as LocationContext } from "../context/locationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
};
