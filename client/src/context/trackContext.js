import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get("/api/v1/tracks");

  dispatch({ type: "FETCH_TRACKS", payload: response.data });
};

const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post("/api/v1/tracks", { name, locations });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
