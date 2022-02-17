import React, { useEffect } from "react";
import { auth, StyledFirebaseAuth, uiConfig, mainFirebase } from "../firebase";
import { useDispatch } from "react-redux";
function FirebaseLogin() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unregisterAuthObserver = mainFirebase
      .auth()
      .onAuthStateChanged((user) => {
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: user });
      });
    return () => unregisterAuthObserver();
  }, [dispatch]);

  return (
    <div className="w-10/12 bg-white rounded-md shadow-md  md:w-8/12 lg:w-6/12 mx-auto mt-5 p-2">
      <h3 className="pt-5 mb-5 text-2xl font-bold text-center">Login</h3>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}

export default FirebaseLogin;
