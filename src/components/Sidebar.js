import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isManuOpen = useSelector((store) => store.app.isManuOpen);

  //   Early Return
  if (!isManuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-44 cursor-pointer">
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
