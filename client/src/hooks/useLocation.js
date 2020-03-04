import React, { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    // This will request location access permission
    const startWatching = async () => {
      try {
        const { status } = await requestPermissionsAsync();
        if (status === "granted") {
          const sub = await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10
            },
            callback
          );
          setSubscriber(sub);
        } else {
          throw new Error("Location permission not granted");
        }
      } catch (err) {
        setError(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }

    // Clean up method
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [error];
};
