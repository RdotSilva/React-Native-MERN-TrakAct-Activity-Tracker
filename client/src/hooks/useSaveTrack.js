import { useContext } from "react";
import { Context as TrackContext } from "../context/trackContext";
import { Context as LocationContext } from "../context/locationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);

  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
  };

  return [saveTrack];
};
