export const uploadReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPLOAD_LOADING":
      return { loading: true };
    case "UPLOAD_SUCCESS":
      return { success: true };
    case "UPLOAD_FAIL":
      return { error: action.payload };
    case "UPLOAD_RESET":
      return {};
    default:
      return state;
  }
};

export const fetchFilesReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_FILES_LOADING":
      return { loading: true };
    case "FETCH_FILES_SUCCESSS":
      return { files: action.payload };
    case "FETCH_FILES_ERROR":
      return { error: action.payload };
    case "FETCH_FILES_RESET":
      return {};
    default:
      return state;
  }
};
