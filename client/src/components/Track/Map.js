import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as LocationContext } from "../../context/locationContext";

const Map = () => {
  const { state } = useContext(LocationContext);

  console.log(state);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 41.8164572,
        longitude: -71.4325848,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
