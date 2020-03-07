import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as TrackContext } from "../context/trackContext";

const TrackListScreen = ({ navigation }) => {
  const { fetchTracks } = useContext(TrackContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});

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
