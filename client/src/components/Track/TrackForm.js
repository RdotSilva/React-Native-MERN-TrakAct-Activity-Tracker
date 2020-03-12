import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./../Spacer";
import { Context as LocationContext } from "../../context/locationContext";
import useSaveTrack from "../../hooks/useSaveTrack";
import RNPickerSelect from "react-native-picker-select";

const TrackForm = () => {
  const {
    state: { name, recording, locations, type },
    startRecording,
    stopRecording,
    changeName,
    changeType
  } = useContext(LocationContext);

  // TODO: track type, add onTrackTypeChange method and put that into RNPicker

  // React hook
  const [saveTrack] = useSaveTrack();

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
        <RNPickerSelect
          placeholder={{
            label: "Select Activity Description",
            value: null
          }}
          onValueChange={changeType}
          items={[
            { label: "Run", value: "run" },
            { label: "Hike", value: "hike" },
            { label: "Bike Ride", value: "bike" },
            { label: "Other", value: "other" }
          ]}
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
              onPress={saveTrack}
            />
          ) : null}
        </Spacer>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
