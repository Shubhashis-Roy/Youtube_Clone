import React from "react";
import { useSelector } from "react-redux";
import subscribeIcon from "../img/SideBar/Subscribe.png";
import WatchLetter from "../img/SideBar/WatchLetter.png";
import { Link } from "react-router-dom";
import History from "../img/SideBar/History.png";

const HomeBar = () => {
  const sideBar = useSelector((store) => store.app.isManuOpen);

  if (sideBar) return;
  return (
    <div className=" w-20 mt-5 h-full fixed bg-white">
      <div>
        <Link to="/subscribes">
          <img
            className="ml-6 mt-6 h-auto w-8"
            alt="Subscribe"
            src={subscribeIcon}
          />
          <p className="text-[12px] ml-[6px]">Subscribtions</p>
        </Link>
      </div>

      <div>
        <Link to="/watch-history">
          <img className="ml-6 mt-6 h-auto w-8" src={History} />
          <p className="text-[13px] ml-4">History</p>
        </Link>
      </div>

      <div>
        <Link to="/watch-letter">
          <img className="ml-6 mt-6 h-auto w-8" src={WatchLetter} />
          <p className="text-[13px] ml-5">Watch letter</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeBar;
