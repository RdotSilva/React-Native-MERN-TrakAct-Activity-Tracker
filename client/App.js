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

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="TrackList"
              component={TrackListScreen}
              options={{ title: "Track List" }}
            />
            <Stack.Screen
              name="TrackDetail"
              component={TrackDetailScreen}
              options={{ title: "Track Details" }}
            />
          </>
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SigninScreen}
            options={{ title: "Sign In" }}
          />
        )}
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
