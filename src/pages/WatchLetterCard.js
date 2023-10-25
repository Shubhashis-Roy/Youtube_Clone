import React from "react";

const WatchLetterCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, description } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex mb-4 mt-4 ml-3 p-1 hover:bg-gray-300 hover:shadow-lg rounded-lg duration-300">
      <div className="w-5 mt-14">
        <hr className="w-5 border-t-[1px] border-black" />
        <hr className="w-5 border-t-[1px] border-black mt-[5px]" />
      </div>
      <div className="w-[173px] pl-3">
        <img
          className="w-[173px] h-[113px] rounded-lg"
          alt="thumnail"
          src={thumbnails.standard.url}
        />
      </div>
      <div className="pl-3 mt-2 w-[560px]">
        <ul>
          <li className="text-lg"> {title} </li>
          <div className="flex">
            <li className="text-gray-800 mt-2 text-[16px] ">
              {" "}
              {channelTitle}{" "}
            </li>
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

export default WatchLetterCard;
