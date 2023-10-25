import React from "react";
import Button from "./Button";
import { GoHomeFill } from "react-icons/go";

const ButtonList = () => {
  return (
    <div className="flex">
      <div className="cursor-pointer">
        <GoHomeFill className="text-2xl mt-3 ml-[27px] " />
        <p className="text-[12px] ml-[22px]">Home</p>
      </div>
      <div className="flex ml-9">
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
