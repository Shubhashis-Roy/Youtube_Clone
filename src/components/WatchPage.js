import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, headerButtonClose } from "../utils/reduxStore/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./comments/CommentsContainer";
import LiveChat from "./LiveChat";
import WatchPageButton from "./WatchPageButton";
import RealatedVideo from "./RealatedVideo";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    dispatch(headerButtonClose());
  }, []);

  const videoId = searchParam.get("v");

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
            <RealatedVideo videoId={videoId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
