import React, { useEffect, useState } from "react";
import {
  YOUTUBE_VIDEO_WATCH_API,
  Youtube_Video_API,
} from "../../utils/constant";
import { Link } from "react-router-dom";

const RelatedVideo = ({ videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState();

  useEffect(() => {
    getRelatedVideos();
  }, [videoId]);

  const getRelatedVideos = async () => {
    const data = await fetch(Youtube_Video_API);
    const json = await data.json();
    setRelatedVideos(json?.items);
  };

  // if (!relatedVideos.length) return;

  return (
    <div className="overflow-y-scroll h-[1250px] ">
      {relatedVideos?.map((video) => (
        <Link
          key={video?.id}
          to={"/watch?v=" + video?.id}
          onClick={() => window.scroll(0, 0)}
        >
          <div className="px-3 flex flex-wrap py-2 hover:bg-gray-300 hover:rounded-xl duration-200">
            <img
              className="rounded-xl w-[168px] h-[94px] "
              alt="thumbnail"
              src={video?.snippet?.thumbnails?.medium?.url}
            />
            <ul className="flex flex-col justify-start ml-2 w-[230px]">
              <li className="font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">
                {video?.snippet?.title}
              </li>
              <li className="text-gray-500 text-[12px]">
                {video?.snippet?.channelTitle}
              </li>
              <li className="text-gray-500 text-[12px]">
                100 views{" "}
                {(
                  Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) /
                  (60 * 60 * 24 * 1000)
                ).toFixed(1)}{" "}
                days ago
              </li>
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideo;
