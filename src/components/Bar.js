import React from "react";
import { useSelector } from "react-redux";
import SubscribeIcon from "../img/SideBar/Subscribe.png";
import HomeIcon from "../img/SideBar/HomeIcon.png";
import History from "../img/SideBar/History.png";
import WatchLetter from "../img/SideBar/WatchLetter.png";
import { Link } from "react-router-dom";

const Bar = () => {
  const sideBar = useSelector((store) => store.app.isManuOpen);

  if (sideBar) return;
  return (
    <div className=" w-20 mt-[66px] h-full fixed bg-white">
      <div>
        <Link to="/">
          <img className="ml-5 mt-[10px]" alt="Subscribe" src={HomeIcon} />
          <p className="text-[12px] ml-[23px]">Home</p>
        </Link>
      </div>
      <div>
        <Link to="/subscribes">
          <img className="ml-6 mt-6" alt="Subscribe" src={SubscribeIcon} />
          <p className="text-[12px] ml-[6px]">Subscribtions</p>
        </Link>
      </div>

      <div>
        <Link to="/watch-history">
          <img className="ml-7 mt-6" src={History} />
          <p className="text-[13px] ml-5">History</p>
        </Link>
      </div>
      <div>
        <Link to="/watch-letter">
          <img className="ml-7 mt-6" src={WatchLetter} />
          <p className="text-[13px] ml-6">Watch letter</p>
        </Link>
      </div>
    </div>
  );
};

export default Bar;
