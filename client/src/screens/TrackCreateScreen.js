import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "./../components/Track/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestPermissionsAsync } from "expo-location";
import "../utils/_mockLocation";

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  // This will request location access permission
  const startWatching = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status === "granted") {
        // TODO location logic
      } else {
        throw new Error("Location permission not granted");
      }
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
