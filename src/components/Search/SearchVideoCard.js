import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/reduxStore/watchVideoSlice";

const SearchVideoCard = ({ info }) => {
  const dispatch = useDispatch();

  const handleDispatchInfo = () => {
    dispatch(addItem(info));
  };
  const { snippet } = info;
  const { channelTitle, title, thumbnails, description, publishedAt } = snippet;

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
          <li className=" text-gray-800 text-[14px] ml-1 mt-1">
            {(
              Math.abs(new Date(publishedAt) - new Date()) /
              (60 * 60 * 24 * 1000)
            ).toFixed(0)}
            days ago
          </li>
          <li className="text-gray-800 mt-2 flex">
            <img
              className="h-8 w-8 rounded-full mr-2"
              src={thumbnails.default.url}
            />
            <p className="mt-1">{channelTitle}</p>
          </li>
          <li className=" mt-4 text-gray-800 text-[14px] "> {description} </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchVideoCard;
