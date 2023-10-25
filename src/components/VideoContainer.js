import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Youtube_Video_API } from "../utils/constant";
import { Link } from "react-router-dom";
import HomeBar from "./HomeBar";
import { useDispatch } from "react-redux";
import { headerButtonShow } from "../utils/reduxStore/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerButtonShow());
  }, []);

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
    <div className="flex">
      <HomeBar />
      <div className="flex flex-wrap mt-6 ml-20">
        {videos.map((item) => (
          <>
            <Link key={item.id} to={"/watch?v=" + item.id}>
              <VideoCard info={item} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
