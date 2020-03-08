import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/trackContext";

const TrackDetailScreen = ({ route, navigation }) => {
  const { state } = useContext(TrackContext);

  // Get track ID from navigation params
  const { _id } = route.params;

  return <View></View>;
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
