import React from "react";
import Button from "./Button";

// const list = ["All"]

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Music" />
      <Button name="JavaSrcipt" />
      <Button name="Live" />
      <Button name="Cricket" />
    </div>
  );
};

export default ButtonList;
