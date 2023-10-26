import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/reduxStore/appSlice";
import { HiMiniBars3 } from "react-icons/hi2";
import youtubeLogo from "../img/HeaderIcon/Youtube_icon.png";
import SubscribeIcon from "../img/SideBar/Subscribe.png";
import HomeIcon from "../img/SideBar/HomeIcon.png";
import History from "../img/SideBar/History.png";
import WatchLetter from "../img/SideBar/WatchLetter.png";
import likeButton from "../img/likeButton.png";

const Sidebar = () => {
  const isManuOpen = useSelector((store) => store.app.isManuOpen);

  const dispatch = useDispatch();

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  //   Early Return
  if (!isManuOpen) return null;

  return (
    <div className="w-[18%] shadow-xl cursor-pointer z-10 fixed bg-slate-100 h-full">
      <div className=" flex col-span-1">
        <HiMiniBars3
          className="text-[40px] mt-3 ml-5 p-2 cursor-pointer hover:bg-gray-300 rounded-full "
          onClick={() => toggleMenuHandle()}
        />
        <img
          className="h-[43px] ml-1 w-auto mt-3 cursor-pointer"
          alt="Youtube-Logo"
          src={youtubeLogo}
        />
      </div>
      <Link to="/">
        <div className="flex mx-[7px] mt-3 h-[53px] pt-[10px] hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
          <img
            className="ml-[18px] h-[33px] w-[32px]"
            alt="Subscribe"
            src={HomeIcon}
          />
          <p className="text-[16px] mt-1 ml-4">Home</p>
        </div>
      </Link>
      <Link to="/subscribes">
        <div className=" flex mx-[7px] h-[53px] pt-[10px] hover:bg-gray-300 duration-200 rounded-lg cursor-pointer">
          <img
            className="ml-[18px] h-[34px] w-[33px]"
            alt="Subscribe"
            src={SubscribeIcon}
          />
          <p className="text-[16px] mt-1 ml-4 ">Subscribtions</p>
        </div>
      </Link>
      <div className="border-t-[1px] border-gray-400 mx-3 my-4"></div>
      <Link to="/watch-history">
        <div className="flex mx-[7px] h-[53px] pt-[10px] hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
          <img className="ml-[18px] h-[34px] w-[33px]" src={History} />
          <p className="text-[16px] mt-[5px] ml-4">History</p>
        </div>
      </Link>
      <Link to="/watch-letter ">
        <div className="flex mx-[7px] h-[53px] pt-[10px] hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
          <img className="ml-[18px] h-[34px] w-[33px]" src={WatchLetter} />
          <p className="text-[16px] mt-1 ml-4">Watch letter</p>
        </div>
      </Link>
      <div className="border-t-[1px] border-gray-400 mx-3 my-4"></div>

      <Link to="/liked-video">
        <div className="flex mx-[7px] h-[53px] pt-[10px] hover:bg-gray-300 duration-200 cursor-pointer rounded-lg">
          <img className="ml-[24px] h-[28px] w-[26px]" src={likeButton} />
          <p className="text-[16px] mt-1 ml-4">Liked videos</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
