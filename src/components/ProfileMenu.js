import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../actions/authAction";
import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
const ProfileMenu = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 transition-all duration-700 bg-black/70">
      <div className="flex items-center justify-between px-2 pt-10">
        <span></span>
        <button
          className="p-3 mx-3 text-white cursor-pointer hover:bg-white hover:text-gray-800"
          onClick={() => setOpen(!open)}
        >
          <FaRegTimesCircle size={24} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <Link
          to="/"
          onClick={() => {
            setOpen(!open);
          }}
          className="px-5 py-3 text-white hover:text-gray-400"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            setOpen(!open);
            dispatch(logoutUser());
          }}
          to="/"
          className="px-5 py-3 text-white hover:text-gray-400"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
