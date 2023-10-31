import React, { useState } from "react";
import Button from "./Button";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ButtonList = () => {
  // const item = useSelector((store) => store.watchLetter.item);

  return (
    <div className="flex">
      <Link to="/">
        <div className="cursor-pointer hover:bg-gray-300 duration-200 ml-[9px] pr-4 rounded-lg">
          <GoHomeFill className="text-[25px] mt-3 ml-[20px]" />
          <p className="text-[12px] ml-[16px]">Home</p>
        </div>
      </Link>
      <div className="flex ml-5">
        <Link to="/">
          <p
            className={`px-2 py-1 m-2 bg-gray-100 hover:bg-gray-300 duration-200 rounded-lg`}
          >
            All
          </p>
        </Link>
        <Button name="Music" />
        <Button name="JavaSrcipt" />
        <Button name="Live" />
        <Button name="Mixes" />
        <Button name="T-Series" />
        <Button name="Programming" />
        <Button name="React" />
        <Button name="Filmi" />
        <Button name="Indian Pop Music" />
        <Button name="Comedy" />
        <Button name="News" />
        <Button name="New To You" />
      </div>
    </div>
  );
};

export default ButtonList;
