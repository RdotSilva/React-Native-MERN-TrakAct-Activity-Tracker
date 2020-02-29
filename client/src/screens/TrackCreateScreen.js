import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "./../components/Track/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
    } catch (err) {
      setError(err);
    }
  };

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
