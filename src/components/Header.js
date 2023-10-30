import React from "react";
import youtubeLogo from "../img/HeaderIcon/Youtube_icon.png";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/reduxStore/appSlice";
import SearchBar from "./SearchBar";
import ButtonList from "./ButtonList";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  const dispatch = useDispatch();
  const isHomePage = useSelector((store) => store.app.isHomePage);

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" fixed bg-white w-full">
      <div className="grid grid-flow-col w-full  mb-2 ">
        <div className="flex col-span-1">
          <HiMiniBars3
            className="text-[40px] mt-3 ml-5 p-2 cursor-pointer hover:bg-gray-300 rounded-full "
            onClick={() => toggleMenuHandle()}
          />
          <Link to="/">
            <img
              className="h-[43px] ml-1 w-auto mt-3 cursor-pointer"
              alt="Youtube-Logo"
              src={youtubeLogo}
            />
          </Link>
        </div>

        <div className="col-span-10 pt-4 pl-16">
          <SearchBar />
        </div>

        <div className="col-span-1 pt-5">
          <GoogleAuth />
        </div>
      </div>
      {isHomePage && (
        <div className="w-full mt-3 mb-2">
          <ButtonList />
        </div>
      )}
    </div>
  );
};

export default Header;
