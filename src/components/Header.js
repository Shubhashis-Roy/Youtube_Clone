import React from "react";
import youtubeLogo from "../img/HeaderIcon/Youtube_icon.png";
import BarIcon from "../img/HeaderIcon/Bar_Icon.png";
import UserIcon from "../img/HeaderIcon/UserIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/reduxStore/appSlice";
import SearchBar from "./SearchBar";
import ButtonList from "./ButtonList";

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
          <img
            onClick={() => toggleMenuHandle()}
            className="h-[40px] mt-3 ml-4 pt-0 cursor-pointer"
            alt="logo"
            src={BarIcon}
          />
          {/* <NavLink to={"/"}> */}
          <img
            className="h-[43px] w-auto mt-3 cursor-pointer"
            alt="Youtube-Logo"
            src={youtubeLogo}
          />
          {/* </NavLink> */}
        </div>

        <div className="col-span-10 pt-4 pl-16">
          <SearchBar />
        </div>

        <div className="col-span-1 pt-5">
          <img className="h-9" alt="user" src={UserIcon} />
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
