import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, headerButtonClose } from "../../utils/reduxStore/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../Comments/CommentsContainer";
import LiveChat from "./LiveChat";
import WatchPageButton from "./WatchPageButton";
import RelatedVideo from "./RelatedVideo";
import { YOUTUBE_VIDEO_WATCH_API } from "../../utils/constant";
import { addItem } from "../../utils/reduxStore/watchVideoSlice";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const [videoData, setVideoData] = useState();
  const dispatch = useDispatch();

  const videoId = searchParam.get("v");

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_WATCH_API + videoId);
    const json = await data.json();
    setVideoData(json.items);
    dispatch(addItem(json.items[0]));
  };

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    dispatch(headerButtonClose());
  }, []);

  if (videoData === undefined) return;

  return (
    <div className="ml-14 mt-16">
      <div className="x-5 pt-3 flex w-full">
        <div>
          <iframe
            className="rounded-xl"
            width="740"
            height="400"
            src={"https://www.youtube.com/embed/" + videoId}
            // src="https://www.youtube.com/embed/5Be2NYBXJJY?si=Gwb6oTdVkmXT7Hv-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="">
            <WatchPageButton />
          </div>
          <div className="">
            <CommentsContainer />
          </div>
        </div>
        <div className="mr-5">
          <div className="w-full">
            <LiveChat />
          </div>

          <div className="w-full ml-1 mt-8 pl-2">
            <RelatedVideo videoId={videoId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
