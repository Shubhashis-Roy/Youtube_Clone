import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Youtube_Video_API } from "../utils/constant";
import HomeBar from "./HomeBar";
import { useDispatch } from "react-redux";
import { closeMenu, headerButtonShow } from "../utils/reduxStore/appSlice";
import HomeShimmerUI from "./HomeShimmerUI";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

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

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => {
      window.removeEventListener("scroll", infiniteScroll, true);
    };
  }, [nextPageToken]);

  const getVideos = async () => {
    try {
      const url =
        nextPageToken !== ""
          ? `${Youtube_Video_API}&pageToken=${nextPageToken}`
          : Youtube_Video_API;
      const data = await fetch(url);
      const json = await data.json();
      setNextPageToken(json?.nextPageToken);
      setVideos([...videos, ...json?.items]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const infiniteScroll = () => {
    if (
      window.innerHeight + Math.round(document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 300
    ) {
      getVideos();
    }
  };

  if (!videos.length) return <HomeShimmerUI />;

  return (
    <div className="flex">
      <HomeBar />
      <div className="flex flex-wrap mt-3 ml-20">
        {videos?.map((item) => (
          <VideoCard key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
