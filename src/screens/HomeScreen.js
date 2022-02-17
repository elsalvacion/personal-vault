import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchFiles } from "../actions/filesAction";
import FirebaseLogin from "../components/FirebaseLogin";
const HomeScreen = () => {
  const { user } = useSelector((state) => state.auth);
  const { files, loading } = useSelector((state) => state.fetchFiles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch, user]);
  return (
    <div className="w-screen h-screen bg-gray-200">
      {!user ? (
        <FirebaseLogin />
      ) : (
        <>
          <div className="p-2 mt-4">
            <h2 className="mb-3">Recent</h2>
            {loading ? (
              <h2>Loading ...</h2>
            ) : (
              <div className="flex flex-wrap items-stretch justify-center text-xl ">
                {files &&
                  files.map(({ file, id, user }) => (
                    <div
                      className="w-40 m-2 bg-white rounded-lg cursor-pointer hover:shadow-md"
                      key={id}
                    >
                      {/* pdf */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "pdf" && (
                        <img
                          src="images/default-pdf-image.png"
                          className="w-full h-40"
                          alt={file}
                        />
                      )}

                      {/* doc */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "doc" && (
                        <img
                          src="images/default-doc-image.png"
                          className="w-full h-40"
                          alt={file}
                        />
                      )}

                      {/* docx */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "docx" && (
                        <img
                          src="images/default-doc-image.png"
                          className="w-full h-40"
                          alt={file}
                        />
                      )}

                      {/* jpeg */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "jpeg" && (
                        <img src={file} className="w-full h-40" alt={file} />
                      )}

                      {/* png */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "png" && (
                        <img src={file} className="w-full h-40" alt={file} />
                      )}

                      {/* jpg */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "jpg" && (
                        <img src={file} className="w-full h-40" alt={file} />
                      )}
                      {/* mp4 */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "mp4" && (
                        <video className="w-full h-40">
                          <source src={file} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {/* ppt */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "ppt" && (
                        <img
                          src="images/default-ppt-image.png"
                          className="w-full h-40"
                          alt={file}
                        />
                      )}

                      {/* epub */}
                      {file.split(".")[file.split(".").length - 1] ===
                        "epub" && (
                        <img
                          src="images/default-epub-image.png"
                          className="w-full h-40"
                          alt={file}
                        />
                      )}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
