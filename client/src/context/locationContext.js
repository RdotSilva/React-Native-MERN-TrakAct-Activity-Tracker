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
    case "ADD_LOCATION":
      return { ...state, locations: [...state.locations, payload] };
    case "CHANGE_NAME":
      return { ...state, name: payload };
    // TODO: track type
    case "CHANGE_TYPE":
      return { ...state, type: payload };
    case "RESET":
      return { ...state, name: "", locations: [] };
    default:
      return state;
  }
};

const changeName = dispatch => name => {
  dispatch({ type: "CHANGE_NAME", payload: name });
};

// TODO: track type
const changeType = dispatch => type => {
  dispatch({ type: "CHANGE_TYPE", payload: type });
};

const startRecording = dispatch => () => {
  dispatch({ type: "START_RECORDING" });
};

const stopRecording = dispatch => () => {
  dispatch({ type: "STOP_RECORDING" });
};

const reset = dispatch => () => {
  dispatch({ type: "RESET" });
};

const addLocation = dispatch => (location, recording) => {
  dispatch({ type: "ADD_CURRENT_LOCATION", payload: location });

  if (recording) {
    dispatch({ type: "ADD_LOCATION", payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    reset
  },
  { name: "", recording: false, locations: [], currentLocation: null }
);
