import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CURRENT_LOCATION":
      return { ...state, currentLocation: payload };
    case "START_RECORDING":
      return { ...state, recording: true };
    case "STOP_RECORDING":
      return { ...state, recording: false };
    default:
      return state;
  }
};

const startRecording = dispatch => () => {
  dispatch({ type: "START_RECORDING" });
};

const stopRecording = dispatch => () => {
  dispatch({ type: "STOP_RECORDING" });
};

const addLocation = dispatch => location => {
  console.log("Testing: Location Added");
  dispatch({ type: "ADD_CURRENT_LOCATION", payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation
  },
  { recording: false, locations: [], currentLocation: null }
);
