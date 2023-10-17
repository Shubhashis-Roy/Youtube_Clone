import React from "react";

const WatchHistoryCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, description } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex mb-4 mt-4 ml-4">
      <div className="w-[265px]">
        <img
          className="w-[265px] h-[170px] rounded-xl"
          alt="thumnail"
          src={thumbnails.standard.url}
        />
      </div>
      <div className="ml-4 mt-2 w-[500px]">
        <ul>
          <li className="text-xl"> {title} </li>
          <div className="flex">
            <li className="text-gray-800 mt-2"> {channelTitle} </li>
            <li className="mt-2 ml-3"> ✴️ </li>
            <li className=" ml-3 mt-[10px] text-gray-800 text-[14px] ">
              {viewCount} views
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default WatchHistoryCard;
