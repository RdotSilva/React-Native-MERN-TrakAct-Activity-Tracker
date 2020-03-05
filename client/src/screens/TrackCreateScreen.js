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

  // Rebuild callback every time state.recording changes
  // Returns same function (in memory) if the value doesn't change
  // If value does change it returns a the new callback function
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  // Custom hook to track location
  const [error] = useLocation(isFocused || state.recording, callback);

  console.log(isFocused);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.title} h2>
        Create a Track
      </Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "center"
  }
});

export default withNavigationFocus(TrackCreateScreen);
