import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/reduxStore/appSlice";

const Sidebar = () => {
  const isManuOpen = useSelector((store) => store.app.isManuOpen);

  const dispatch = useDispatch();

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  //   Early Return
  if (!isManuOpen) return null;

  return (
    <div className="p-5 w-[18%] shadow-lg cursor-pointer fixed bg-white h-full">
      <img
        onClick={() => toggleMenuHandle()}
        className="h-[65px] pt-0 cursor-pointer"
        alt="logo"
        src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
      />
      <Link to="/">
        <h3 className="font-bold bg-green-500 m-1 p-1 rounded-lg">Home</h3>
      </Link>
      <Link to={"/watch-history"}>
        <h1 className="font-bold  bg-green-500 m-1 p-1 rounded-lg">History</h1>
      </Link>
      <Link to="/watch-letter">
        <h3 className="font-bold  bg-green-500 m-1 p-1 rounded-lg">
          Watch Letter
        </h3>
      </Link>
      <Link to="/liked-video">
        <h3 className="font-bold  bg-green-500 m-1 p-1 rounded-lg">
          Liked Videoes
        </h3>
      </Link>
      <Link to="/subscribes">
        <h3 className="font-bold  bg-green-500 m-1 p-1 rounded-lg">
          Subscribes
        </h3>
      </Link>
      <ul>
        <li>Music</li>
        <li>Coding</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
