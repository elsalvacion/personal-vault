import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../actions/filesAction";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [errors, setError] = useState(null);
  const dispatch = useDispatch();
  const { loading, success } = useSelector((state) => state.upload);
  const handleSubmit = (e) => {
    e.preventDefault();
    const ext = file[0].name.split(".");
    const extensions = [
      "jpeg",
      "jpg",
      "png",
      "mp4",
      "mp3",
      "pdf",
      "doc",
      "docx",
      "js",
      "html",
      "css",
      "epub",
      "ppt",
    ];
    if (!file) setError("Upload a file");
    else if (!extensions.includes(ext[ext.length - 1]))
      setError("File type not allowed");
    else {
      setError("");
      dispatch(uploadFile(file[0]));
    }
  };
  return (
    <div className="flex flex-col w-10/12 p-3 mx-auto mt-5 bg-white rounded-md shadow-md md:w-8/12 lg:w-6/12">
      <h2 className="mb-4 text-center">Upload photo</h2>

      {errors && <p className="mt-5 mb-2 font-bold text-red-700">{errors}</p>}
      {success && (
        <p className="mt-5 mb-2 font-bold text-gray-700">File uploaded </p>
      )}
      {loading ? (
        <p className="mt-5 mb-2 font-bold text-gray-700">Uploading ...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={(e) => setFile(e.target.files)} />
          <br />
          <br />
          <button
            className="px-3 py-1 text-white bg-green-600 rounded-md shadow-md hover:bg-teal-600"
            type="submit"
          >
            Upload
          </button>
        </form>
      )}
    </div>
  );
};

export default UploadFile;
