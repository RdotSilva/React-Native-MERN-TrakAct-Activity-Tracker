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
    default:
      return state;
  }
};

const signUp = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/api/v1/auth/signup", {
        email,
        password
      });
      await AsyncStorage.setItem("token", response.data.token);
    } catch (err) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up"
      });
    }
  };
};

const signIn = dispatch => {
  return ({ email, password }) => {};
};

const signOut = dispatch => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { isSignedIn: false, errorMessage: "" }
);
