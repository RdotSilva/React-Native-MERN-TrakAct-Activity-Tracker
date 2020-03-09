import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import SplashScreen from "./src/screens/SplashScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

// React navigation
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Context
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as LocationProvider } from "./src/context/locationContext";
import { Provider as TrackProvider } from "./src/context/trackContext";
import { Context as AuthContext } from "./src/context/authContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigator used in the case that user is not logged in.
// Allows users to access signin and signup screens only.
const AuthStackNavigator = () => {
  const { state } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {state.token !== null ? (
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

// Main stack navigator. This will check if user is logged in.
// If user logged in then bring them to the main track details screen (which is a tab navigator).
// If not logged in bring them to the "auth" stack navigator with access to sign in and sign up.
const MainStackNavigator = () => {
  const { state, signUp } = useContext(AuthContext);
  const isLoggedIn = false;

  return (
    <Stack.Navigator>
      {state.token !== null ? (
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

// Track stack navigator allow user to move from the track list to track details screens.
// This is nested inside of the TabNav.
const TrackStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ title: "Track List" }}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{ title: "Current Track" }}
      />
    </Stack.Navigator>
  );
};

// Main screen that will be shown if user is logged in.
// This gives access to track list and account details.
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tracks"
        component={TrackStackNavigator}
        options={{
          title: "Tracks",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="run" color={"purple"} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={"red"} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Create"
        component={TrackCreateScreen}
        options={{
          title: "Add Track",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" color={"green"} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <NavigationContainer>
              <MainStackNavigator />
            </NavigationContainer>
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
