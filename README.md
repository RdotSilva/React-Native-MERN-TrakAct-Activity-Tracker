# React Native MERN TrakAct Activity Tracker

React Native full stack mobile application that allows users to map & keep track of activities such as hiking, biking, running, or walking.

## How to save an activity

1. Sign up with email/password to get login access to the application.

2. Navigate to the "Create" screen using the button navigation bar.

3. Enter an activity description and press the "Start Recording" button to begin tracking your activity.

4. Press "Stop Recording" when your activity is finished.

5. Press "Save Recording" to save your activity to the database.

## How to view previously recorded activities

1. Press the "Tracks" button on the navigation bar.

2. Click the track you want to view.

A map will be displayed with your track data.

### Prerequisites

You must first install Expo.

1. Check if you have Expo installed by typing this inside of the terminal

```
expo -V
```

if you get expo: command not found, you need to install Expo.

```
npm install -g expo-cli
```

You must create a config file in the server folder with your variables.

1. Create a new file: server/config/config.js

2. Add variables

```
module.exports = {
  mongoURI: YOUR_MONGO_URI
};
```

## Installation

1. Install dependencies in server folder.

```
cd server
```

```
npm install
```

## Running the simulator

1. Start the Expo simulator

```
cd client

```

```
expo start

```

or to start Expo simulator and open in the appropriate emulator

```

expo start --ios
expo start --android

```

## Built With

- Expo
- React Native (React hooks)
- React Navigation 5
- ExpressJS
- NodeJS
- MongoDB Atlas

## Screenshots

![Coming Soon](https://upload.wikimedia.org/wikipedia/commons/8/80/Comingsoon.png "Coming Soon")

```

```
