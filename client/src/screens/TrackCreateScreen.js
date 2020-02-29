import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "./../components/Track/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
