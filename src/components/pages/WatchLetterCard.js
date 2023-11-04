import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/reduxStore/watchVideoSlice";
import { convertNumber } from "../../utils/helper";

const WatchLetterCard = ({ info }) => {
  const dispatch = useDispatch();

  const handleInfo = () => {
    dispatch(addItem(info));
  };

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, description } = snippet;

  return (
    <div
      className="flex mb-4 mt-4 ml-3 p-1 hover:bg-gray-300 hover:shadow-lg rounded-lg duration-300"
      onClick={handleInfo}
    >
      <div className="w-5 mt-11">
        <hr className="w-5 border-t-[1px] border-black" />
        <hr className="w-5 border-t-[1px] border-black mt-[5px]" />
      </div>
      <div className="w-[173px] pl-3">
        <img
          className="w-[167px] h-[96px] rounded-lg"
          alt="thumnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="pl-3 w-[560px]">
        <ul>
          <li className="text-[17px]"> {title} </li>
          <div className="flex">
            <li className="text-gray-800 mt-2 text-[15px] ">
              {" "}
              {channelTitle}{" "}
            </li>
            <li className="mt-2 ml-3"> ✴️ </li>
            {!statistics ? (
              <li className=" ml-3 mt-[10px] text-gray-800 text-[14px] ">
                Nan Views
              </li>
            ) : (
              <li className=" ml-3 mt-[10px] text-gray-800 text-[14px] ">
                {convertNumber(statistics.viewCount)} Views
              </li>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WatchLetterCard;
