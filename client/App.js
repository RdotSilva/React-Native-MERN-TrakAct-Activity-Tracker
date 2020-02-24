import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";

// React navigation
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

// Main stack navigator. This will check if user is logged in.
// If user logged in then bring them to the main track details screen (which is a tab navigator).
// If not logged in bring them to the "auth" stack navigator with access to sign in and sign up.
const MainStackNavigator = () => {
  const isLoggedIn = false;
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name="TabNav" component={TabNav} />
      ) : (
        <Stack.Screen name="Please Sign In" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

const TrackStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tracks" component={TrackStackNavigator} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Create" component={TrackCreateScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
