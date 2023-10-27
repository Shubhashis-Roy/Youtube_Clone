import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxStore/watchLetterSlice";
import { convertNumber } from "../utils/helper";

const VideoCard = ({ info }) => {
  const dispatch = useDispatch();

  const handleInfo = () => {
    dispatch(addItem(info));
  };

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  console.log(snippet, "hai");

  return (
    <div className="p-2 m-2 after:w-full cursor-pointer" onClick={handleInfo}>
      <div className="shadow-lg rounded-xl pl-2 pt-2 pb-2 ">
        <img
          className="rounded-xl h-[250px] w-[355px] hover:rounded-none duration-300"
          src={thumbnails.high.url}
          alt="Thumbnails"
        />
        <ul>
          <li className="font-bold"> {title.substring(0, 30)} </li>
          <li> {channelTitle} </li>
          <li> {convertNumber(viewCount)} Views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
