import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxStore/watchLetterSlice";
import { convertNumber } from "../utils/helper";

const WatchHistoryCard = ({ info }) => {
  const dispatch = useDispatch();

  const handleInfo = () => {
    dispatch(addItem(info));
  };

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, description } = snippet;

  return (
    <div
      className="flex mb-4 mt-4 ml-4 hover:bg-gray-300 duration-200 rounded-xl py-1 px-2"
      onClick={handleInfo}
    >
      <div className="w-[265px]">
        <img
          className="w-[265px] h-[170px] rounded-xl"
          alt="thumnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="ml-4 mt-2 w-[500px]">
        <ul>
          <li className="text-xl"> {title} </li>
          <div className="flex">
            <li className="text-gray-800 mt-2"> {channelTitle} </li>
            <li className="mt-2 ml-3"> ✴️ </li>

            {!statistics ? (
              <li className=" ml-3 mt-[10px] text-gray-800 text-[14px] ">
                {" "}
                Nan Views
              </li>
            ) : (
              <li className=" ml-3 mt-[10px] text-gray-800 text-[14px] ">
                {" "}
                {convertNumber(statistics.viewCount)} Views
              </li>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WatchHistoryCard;
