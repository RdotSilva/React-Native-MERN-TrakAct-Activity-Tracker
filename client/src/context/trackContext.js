import createDataContext from "./createDataContext";

const trackReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const createTracks = dispatch => () => {};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
