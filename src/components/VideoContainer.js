import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Youtube_Video_API } from "../utils/constant";
import HomeBar from "./HomeBar";
import { useDispatch } from "react-redux";
import { closeMenu, headerButtonShow } from "../utils/reduxStore/appSlice";
import HomeShimmerUI from "./HomeShimmerUI";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerButtonShow());
  }, []);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_Video_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos.length) return <HomeShimmerUI />;

  return (
    <div className="flex">
      <HomeBar />
      <div className="flex flex-wrap mt-3 ml-20">
        {videos.map((item) => (
          <VideoCard key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
