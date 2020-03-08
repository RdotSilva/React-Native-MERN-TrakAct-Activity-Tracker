import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as TrackContext } from "../context/trackContext";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route, navigation }) => {
  const { state } = useContext(TrackContext);

  // Get track ID from navigation params
  const { _id } = route.params;

  // Search for the correct track based on _id
  const track = state.find(singleTrack => singleTrack._id === _id);

  // Represents the very first set of coordinations that are are tracking
  // Using this to set the starting viewpoint in map
  const initialCoords = track.locations[0].coords;

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <>
        <Text style={styles.title}>{track.name}</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
            ...initialCoords
          }}
        >
          <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 500
  },
  title: {
    alignSelf: "center",
    padding: 10,
    fontSize: 25
  }
});

export default TrackDetailScreen;
