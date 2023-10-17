import React from "react";

const SearchVideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, description } = snippet;

  return (
    <div className="flex mb-4 mt-3">
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
