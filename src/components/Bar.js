import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubscribeIcon from "../img/SideBar/Subscribe.png";
import afterSubscribe from "../img/SideBar/afterSubscribe.png";
import HomeIcon from "../img/SideBar/HomeIcon.png";
import History from "../img/SideBar/History.png";
import WatchLetter from "../img/SideBar/WatchLetter.png";
import { Link } from "react-router-dom";
import { addSubscibeEvent } from "../utils/reduxStore/sideBarSlice";

const Bar = () => {
  const sideBar = useSelector((store) => store.app.isManuOpen);
  const dispatch = useDispatch();

  if (sideBar) return;
  return (
    <div className=" w-[75px] mt-[66px] h-full fixed bg-white">
      <div className="ml-[7px] h-[70px] pt-3 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
        <Link to="/">
          <img
            className="ml-[18px] h-auto w-[28px]"
            alt="Subscribe"
            src={HomeIcon}
          />
          <p className="text-[12px] ml-[16px]">Home</p>
        </Link>
      </div>
      <div className="ml-[7px] h-[75px] pt-4 hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
        <Link to="/subscribes">
          <img
            className="ml-[18px]  h-auto w-8"
            alt="Subscribe"
            src={SubscribeIcon}
          />
          <p className="text-[11px]">Subscribtions</p>
        </Link>
      </div>
      <div className="ml-[7px] h-[75px] pt-4 hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
        <Link to="/watch-history">
          <img className="ml-[18px] h-auto w-8" src={History} />
          <p className="text-[13px] ml-[13px]">History</p>
        </Link>
      </div>
      <div className="ml-[7px] h-[90px] pt-3 hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
        <Link to="/watch-letter">
          <img className="ml-[18px] h-auto w-8" src={WatchLetter} />
          <p className="text-[13px] ml-[16px]">Watch letter</p>
        </Link>
      </div>
    </div>
  );
};

export default Bar;
