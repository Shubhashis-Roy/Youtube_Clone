import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/reduxStore/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./comments/CommentsContainer";
import LiveChat from "./LiveChat";
import {
  addLikedVideo,
  addWatchHistory,
  addWatchLetter,
} from "../utils/reduxStore/watchLetterSlice";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const watchLetterItem = useSelector((store) => store.watchLetter.item);
  dispatch(addWatchHistory(watchLetterItem));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleSave = () => {
    dispatch(addWatchLetter(watchLetterItem));
  };

  const handleLikedVideo = () => {
    dispatch(addLikedVideo(watchLetterItem));
  };

  return (
    <div>
      <div className="x-5 pt-3 flex w-full">
        <div>
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            // src="https://www.youtube.com/embed/5Be2NYBXJJY?si=Gwb6oTdVkmXT7Hv-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="ml-20">
        <button
          className="px-2 py-1 m-2 bg-blue-700 rounded-lg text-white"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="px-2 py-1 m-2 bg-blue-700 rounded-lg text-white"
          onClick={handleLikedVideo}
        >
          Like
        </button>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
