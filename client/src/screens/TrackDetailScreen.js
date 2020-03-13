import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as TrackContext } from "../context/trackContext";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polyline } from "react-native-maps";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const TrackDetailScreen = ({ route, navigation }) => {
  const { state } = useContext(TrackContext);

  // Get track ID from navigation params
  const { _id } = route.params;

  // Search for the correct track based on _id
  const track = state.find(singleTrack => singleTrack._id === _id);

  // Represents the very first set of coordinations that are are tracking
  // Using this to set the starting viewpoint in map
  const initialCoords = track.locations[0].coords;

  // Used to render the icon based on activity type
  const renderTypeIcon = type => {
    switch (type) {
      case "run":
        return <MaterialCommunityIcons name="run" />;
        break;
      case "hike":
        return <MaterialCommunityIcons name="pine-tree" />;
        break;
      case "bike":
        return <MaterialCommunityIcons name="bike" />;
        break;
      case "other":
        return <FontAwesome name="question" />;
      default:
        break;
    }
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <>
        <Text style={styles.title}>{track.name}</Text>
        <Text>{renderTypeIcon(track.type)}</Text>
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
  },
  type: {
    alignSelf: "center"
  }
});

export default TrackDetailScreen;
