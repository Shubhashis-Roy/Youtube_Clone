import React, { useState } from "react";
import { auth, provider } from "../utils/firebase";
import UserIcon from "../img/HeaderIcon/UserIcon.png";
import { signInWithPopup, signOut } from "firebase/auth";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  const [img, setImg] = useState();
  const [isSignIn, setIsSignIn] = useState(false);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const pic = result.user.photoURL;
        setImg(pic);
        setIsSignIn(true);
      })
      .catch((err) => {});
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsSignIn(false);
        setImg("");
      })
      .catch((err) => {});
  };

  return (
    <div className="flex">
      {isSignIn ? (
        <button
          onClick={handleLogout}
          className="px-4 py-1 mr-4 bg-gray-200 hover:bg-gray-400 rounded-full duration-200 text-black flex"
        >
          <GoSignOut className="mt-[5px] mr-2" />
          <p className="mt-[1px]">Sign Out</p>
        </button>
      ) : (
        <>
          <button
            onClick={handleLogin}
            className="px-4 py-1 mr-4 bg-gray-200 hover:bg-gray-400 duration-200 rounded-full text-black flex"
          >
            <GoSignIn className="mt-[5px] mr-2" />
            <p className="mt-[1px]">Sign In </p>
            <FcGoogle className="mt-[3px] ml-2 text-xl" />
          </button>
        </>
      )}
      {isSignIn ? (
        <img className="h-9 rounded-full" alt="user" src={img} />
      ) : (
        <img className="h-9" alt="user" src={UserIcon} />
      )}
    </div>
  );
};

export default GoogleAuth;
