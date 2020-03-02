import React, { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default callback => {
  const [error, setError] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

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
