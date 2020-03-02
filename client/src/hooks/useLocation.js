import React, { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  useEffect(() => {
    startWatching();
  }, [shouldTrack]);

  // This will request location access permission
  const startWatching = async () => {
    try {
      const { status } = await requestPermissionsAsync();
      if (status === "granted") {
        const subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10
          },
          callback
        );
      } else {
        throw new Error("Location permission not granted");
      }
    } catch (err) {
      setError(err);
    }
  };

  return [error];
};
