import * as Location from "expo-location";

// Represents 10 meters in lng/lat
const tenMetersWithDegrees = 0.0001;

// Fake location data to be sent to fake emit
const getLocation = increment => {
  return {
    timestamp: 100000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 41.8164572 + increment * tenMetersWithDegrees,
      latitude: -71.4325848 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
// Every second emit a fake location change (using getLocation above)
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
