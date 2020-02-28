import React, { useEffect, useContext } from "react";

import { Context as AuthContext } from "../context/authContext";

// This splash screen will attempt to log the user in locally if there is a token available.
// It will render a blank screen while the login is happening.
// This will make user experience better.
const SplashScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
};

export default SplashScreen;
