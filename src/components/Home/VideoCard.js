import React from "react";
import { convertNumber } from "../../utils/helper";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 after:w-full">
      <Link to={"/watch?v=" + info.id}>
        <div className="hover:shadow-lg hover:rounded-xl duration-300 pl-2 pt-2 pb-2">
          <img
            className="rounded-xl h-[250px] w-[355px] hover:rounded-none duration-300"
            src={thumbnails.high.url}
            alt="Thumbnails"
          />
          <div className="mt-1 flex">
            <img
              className="h-8 w-8 rounded-full mr-2"
              src={thumbnails.default.url}
            />
            <ul>
              <li className="font-bold"> {title.substring(0, 30)} </li>
              <li> {channelTitle} </li>
              <li className="flex">
                {convertNumber(viewCount)} Views
                <BsDot className="mt-1 text-lg" />
                {(
                  Math.abs(new Date(publishedAt) - new Date()) /
                  (60 * 60 * 24 * 1000)
                ).toFixed(0)}
                days ago
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
