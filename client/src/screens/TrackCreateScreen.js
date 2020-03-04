import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "./../components/Track/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "@react-navigation/compat";
import "../utils/_mockLocation";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "./../components/Track/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [error] = useLocation(isFocused, callback);

  console.log(isFocused);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
