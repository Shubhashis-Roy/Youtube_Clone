import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxStore/watchLetterSlice";

const SearchVideoCard = ({ info }) => {
  const dispatch = useDispatch();

  const handleDispatchInfo = () => {
    dispatch(addItem(info));
  };

  const { snippet } = info;
  const { channelTitle, title, thumbnails, description } = snippet;

  return (
    <div
      className="flex mt-1 hover:bg-gray-200 rounded-xl p-2 duration-200"
      onClick={handleDispatchInfo}
    >
      <div className="w-[350px]">
        <img
          className="w-[350px] rounded-xl"
          alt="thumnail"
          src={thumbnails.high.url}
        />
      </div>
      <div className="ml-4 mt-2 w-[700px] ">
        <ul>
          <li className="text-xl"> {title} </li>
          <li className="text-gray-800 mt-2"> {channelTitle} </li>
          <li className=" mt-4 text-gray-800 text-[14px] "> {description} </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchVideoCard;
