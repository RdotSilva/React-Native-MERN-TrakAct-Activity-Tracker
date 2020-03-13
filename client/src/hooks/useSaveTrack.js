import { useContext } from "react";
import { Context as TrackContext } from "../context/trackContext";
import { Context as LocationContext } from "../context/locationContext";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const { createTrack } = useContext(TrackContext);

  const navigation = useNavigation();

  const {
    state: { locations, name, type },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations, type);
    reset();
    navigation.navigate("TrackList");
  };

  return [saveTrack];
};
