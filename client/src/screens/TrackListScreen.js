import React, { useEffect, useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/trackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  // This is used to track focus on the track list screen
  // If this is focused it will call the fetch tracks actions
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    fetchTracks();

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Text>TrackListScreen</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
