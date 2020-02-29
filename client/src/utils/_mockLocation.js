import * as Location from "expo-location";

// Represents 10 meters in lng/lat
const tenMetersWithDegrees = 0.0001;

// Fake location data to be sent to fake emit
const getLocation = increment => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees
    }
  };
};
