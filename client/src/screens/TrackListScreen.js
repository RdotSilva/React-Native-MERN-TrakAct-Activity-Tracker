import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
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
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
