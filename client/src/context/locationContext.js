import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};

const startRecording = dispatch => () => {};

const stopRecording = dispatch => () => {};

const addLocation = dispatch => () => {};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation
  },
  { recording: false, locations: [], currentLocation: null }
);
