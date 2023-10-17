import React from "react";
import youtubeLogo from "../img/Youtube-logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/reduxStore/appSlice";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-[65px] pt-0 cursor-pointer"
          alt="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        {/* <NavLink to={"/"}> */}
        <img
          className="h-[65px] w-auto mx-2 cursor-pointer"
          alt="Youtube-Logo"
          src={youtubeLogo}
        />
        {/* </NavLink> */}
      </div>

      <div className="col-span-10 pt-4 pl-16">
        <SearchBar />
      </div>

      <div className="col-span-1 pt-5">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
