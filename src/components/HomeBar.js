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
      <div className="ml-[7px] mt-3 h-[75px] pt-4 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer ">
        <Link to="/subscribes">
          <img
            className="ml-[18px] h-auto w-8"
            alt="Subscribe"
            src={subscribeIcon}
          />
          <p className="text-[12px]">Subscribtions</p>
        </Link>
      </div>

      <div className="ml-[7px] h-[75px] pt-4 hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
        <Link to="/watch-history">
          <img className="ml-[18px] h-auto w-8" src={History} />
          <p className="text-[13px] ml-[13px]">History</p>
        </Link>
      </div>

      <div className="ml-[7px] h-[90px] pt-3 hover:bg-gray-300 duration-200 cursor-pointer rounded-lg ">
        <Link to="/watch-letter">
          <img className="ml-[18px] h-auto w-8" src={WatchLetter} />
          <p className="text-[13px] ml-[16px]">Watch letter</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeBar;
