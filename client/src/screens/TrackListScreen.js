import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
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
