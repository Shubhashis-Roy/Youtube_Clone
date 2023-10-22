import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Youtube_Video_API } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_Video_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos) return;

  return (
    <div className="flex flex-wrap">
      {videos.map((item) => (
        <>
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCard info={item} />
          </Link>
        </>
      ))}
    </div>
  );
};

export default VideoContainer;
