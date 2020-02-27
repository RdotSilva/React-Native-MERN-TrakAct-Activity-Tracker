import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "./../components/Auth/AuthForm";
import NavLink from "../components/Auth/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signIn, clearErrorMessage } = useContext(AuthContext);

  // This clears the error message when you navigate away from the component
  useEffect(() => {
    const clear = navigation.addListener("blur", () => {
      clearErrorMessage();
    });

    return clear;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In To TrakAct"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signIn({ email, password })}
      />
      <NavLink
        linkText="Don't have an account? Sign Up"
        routeNavName="Signup"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SigninScreen;
