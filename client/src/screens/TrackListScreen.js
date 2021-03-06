import React, { useEffect, useContext } from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/trackContext";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <>
        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetail", { _id: item._id })
                }
              >
                <ListItem chevron title={item.name} />
              </TouchableOpacity>
            );
          }}
        />
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
