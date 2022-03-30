import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useIsUserLogged = () => {
  const auth = getAuth();
  const [is, setis] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setis(true);
    } else {
      setis(false);
    }
  });
  return is;
};

export default useIsUserLogged;
