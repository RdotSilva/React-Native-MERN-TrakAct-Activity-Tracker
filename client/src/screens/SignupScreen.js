import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "./../components/Auth/AuthForm";
import NavLink from "../components/Auth/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For TrakAct"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={({ email, password }) => signUp({ email, password })}
      />
      <NavLink
        linkText="Already have an account? Sign In"
        routeNavName="Signin"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 25
  },
  signInLink: {
    color: "blue"
  }
});

export default SignupScreen;
