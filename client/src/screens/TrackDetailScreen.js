import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/trackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);

  // Get track ID from navigation params
  const _id = navigation.getParam("_id");
  return (
    <View>
      <Text>TrackDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
