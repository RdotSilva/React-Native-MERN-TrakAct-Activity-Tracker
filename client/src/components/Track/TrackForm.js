import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./../Spacer";
import { Context as LocationContext } from "../../context/locationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button
            buttonStyle={{
              backgroundColor: "red"
            }}
            containerStyle={{
              alignItems: "center"
            }}
            title="Stop Recording"
            onPress={stopRecording}
          />
        ) : (
          <Button
            buttonStyle={{
              backgroundColor: "green"
            }}
            containerStyle={{
              alignItems: "center"
            }}
            title="Start Recording"
            onPress={startRecording}
          />
        )}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
