import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackDetailScreen = ({ navigation }) => {
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
