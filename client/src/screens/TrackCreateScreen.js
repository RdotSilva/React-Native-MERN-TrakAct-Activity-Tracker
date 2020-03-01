import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "./../components/Track/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import "../utils/_mockLocation";
import { Context as LocationContext } from "../context/locationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);

  const [error, setError] = useState(null);

  // This will request location access permission
  const startWatching = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status === "granted") {
        await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          location => {
            addLocation(location);
          }
        );
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
