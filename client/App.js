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

const LoggedInStackNavigator = () => {
  const isLoggedIn = false;
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="TrackList" component={TrackListScreen} />
          <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
        </>
      ) : (
        <Stack.Screen name="Signin" component={SigninScreen} />
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
  return <Tab.Navigator></Tab.Navigator>;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <LoggedInStackNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <View>
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
