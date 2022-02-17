export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER_LOADING":
      return {
        loading: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
      };
    case "LOGIN_USER_ERROR":
      return {
        loading: false,
        error: action.payload,
      };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};
