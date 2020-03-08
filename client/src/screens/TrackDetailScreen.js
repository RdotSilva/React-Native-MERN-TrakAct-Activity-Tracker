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

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <>
        <Text>{track.name}</Text>
        <MapView>
          <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
