import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-64 shadow-lg rounded-lg cursor-pointer">
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
