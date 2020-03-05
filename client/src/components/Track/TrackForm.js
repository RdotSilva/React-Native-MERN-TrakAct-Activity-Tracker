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

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Activity Description"
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
        <Spacer>
          {!recording && locations.length ? (
            <Button
              buttonStyle={{
                backgroundColor: "blue"
              }}
              containerStyle={{
                alignItems: "center"
              }}
              title="Save Recording"
            />
          ) : null}
        </Spacer>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
