import React from "react";
import Button from "./Button";
import { GoHomeFill } from "react-icons/go";

const ButtonList = () => {
  return (
    <div className="flex">
      <div className="cursor-pointer hover:bg-gray-300 duration-200 ml-[9px] pr-4 rounded-lg">
        <GoHomeFill className="text-[25px] mt-3 ml-[20px]" />
        <p className="text-[12px] ml-[16px]">Home</p>
      </div>
      <div className="flex ml-5">
        <Button name="All" />
        <Button name="Music" />
        <Button name="JavaSrcipt" />
        <Button name="Live" />
        <Button name="Mixes" />
        <Button name="T-Series" />
        <Button name="Filmi" />
        <Button name="Indian pop music" />
        <Button name="Comedy" />
        <Button name="Programming" />
        <Button name="JavaSrcipt" />
        <Button name="Live" />
        <Button name="Mixes" />
      </div>
    </div>
  );
};

export default ButtonList;
