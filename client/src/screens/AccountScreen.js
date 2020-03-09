import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "./../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
      <Text>
        WARNING: Signing out before saving a track will result in the track
        being lost forever!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
