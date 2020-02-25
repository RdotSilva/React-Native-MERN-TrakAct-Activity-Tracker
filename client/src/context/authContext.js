import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = dispatch => {
  return ({ email, password }) => {};
};

const signIn = dispatch => {
  return ({ email, password }) => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
