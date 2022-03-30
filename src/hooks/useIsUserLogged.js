import { getAuth } from "firebase/auth";

const useIsUserLogged = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return user;
};

export default useIsUserLogged;
