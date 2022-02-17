import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfileMenu from "./ProfileMenu";
import { Link, useHistory } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";
const NavBar = () => {
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between h-12 px-3 bg-white">
      <Link to="/" className="uppercase">
        Personal Vault
      </Link>
      {user && (
        <div className="flex items-center ">
          <Link
            className="p-2 mx-3 hover:bg-black hover:text-gray-50"
            to="/upload"
          >
            <FaFileUpload onClick={() => history.push("/upload")} size={24} />
          </Link>
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => setOpenProfileMenu(!openProfileMenu)}
          />
        </div>
      )}

      {openProfileMenu && (
        <ProfileMenu open={openProfileMenu} setOpen={setOpenProfileMenu} />
      )}
    </nav>
  );
};

export default NavBar;
