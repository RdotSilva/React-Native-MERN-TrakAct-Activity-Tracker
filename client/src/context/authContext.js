import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ERROR":
      return {
        ...state,
        errorMessage: payload
      };
    case "SIGN_IN":
      return { errorMessage: "", token: payload };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({
    type: "CLEAR_ERROR_MESSAGE"
  });
};

const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/api/v1/auth/signup", {
      email,
      password
    });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN_IN", payload: response.data.token });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Something went wrong with sign up"
    });
  }
};
const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/api/v1/auth/signin", {
      email,
      password
    });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN_IN", payload: response.data.token });
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Something went wrong with sign in"
    });
  }
};

const signOut = dispatch => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp, clearErrorMessage },
  { token: null, errorMessage: "" }
);
