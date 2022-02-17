import { getAuth, signOut } from "firebase/auth";
export const loginUser = () => (dispatch) => {};
export const logoutUser = () => (dispatch) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      dispatch({
        type: "LOGOUT_USER",
      });
    })
    .catch((error) => {
      dispatch({
        type: "LOGIN_USER_ERROR",
        payload: error,
      });
    });
};
