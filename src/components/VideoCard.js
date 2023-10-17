import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/reduxStore/watchLetterSlice";

const VideoCard = ({ info }) => {
  const dispatch = useDispatch();

  const handleInfo = () => {
    dispatch(addItem(info));
  };

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className="p-2 m-2 w-64 shadow-lg rounded-lg cursor-pointer"
      onClick={handleInfo}
    >
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="Thumbnails"
      />
      <ul>
        <li className="font-bold"> {title.substring(0, 30)} </li>
        <li> {channelTitle} </li>
        <li> {statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
