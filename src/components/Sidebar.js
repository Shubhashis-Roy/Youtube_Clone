import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isManuOpen = useSelector((store) => store.app.isManuOpen);

  //   Early Return
  if (!isManuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-44">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Coding</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Letter</h1>
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
