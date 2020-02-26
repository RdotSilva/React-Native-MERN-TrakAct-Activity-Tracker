import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    // TODO: Add AuthForm component and pass props in: headerText, errorMessage, onSubmit, submitButtonText
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.signInLink}>
            Already have an account? Sign In
          </Text>
        </Spacer>
      </TouchableOpacity>
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
