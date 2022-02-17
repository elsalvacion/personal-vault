import { uploadBytes, ref } from "firebase/storage";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db, storage } from "../firebase";

export const uploadFile = (file) => (dispatch, getState) => {
  try {
    dispatch({
      type: "UPLOAD_LOADING",
    });

    const storageRef = ref(storage, file.name);
    uploadBytes(storageRef, file).then(async (snapShot) => {
      const fileUploaded = await addDoc(collection(db, "files"), {
        file: file.name,
        user: getState().auth.user.uid,
      });

      if (fileUploaded)
        dispatch({
          type: "UPLOAD_SUCCESS",
        });
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "UPLOAD_ERROR",
      payload: err,
    });
  }
};

export const fetchFiles = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "FETCH_FILES_LOADING",
    });

    const q = query(
      collection(db, "files", orderBy("desc")),
      where("user", "==", getState().auth.user.uid)
    );
    const querySnapshot = await getDocs(q);
    const files = [];
    querySnapshot.forEach((doc) =>
      files.push({
        id: doc.id,
        ...doc.data(),
      })
    );
    console.log(files);
    dispatch({
      type: "FETCH_FILES_SUCCESSS",
      payload: files,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: "FETCH_FILES_ERROR",
      payload: err,
    });
  }
};
