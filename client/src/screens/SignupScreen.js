import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "./../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "./../components/Auth/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up For TrakAct"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />
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
