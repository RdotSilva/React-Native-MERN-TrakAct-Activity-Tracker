import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./../Spacer";
import { Context as LocationContext } from "../../context/locationContext";

const TrackForm = () => {
  const { startRecording, stopRecording, changeName } = useContext(
    LocationContext
  );
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" />
      </Spacer>
      <Spacer>
        <Button title="Start Recording" />
      </Spacer>
    </>
  );
};

export default TrackForm;
