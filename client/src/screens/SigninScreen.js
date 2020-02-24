import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
