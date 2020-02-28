import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "./../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <Text>AccountScreen</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
