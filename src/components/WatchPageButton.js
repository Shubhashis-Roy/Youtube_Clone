import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channel_IMG_URL_1stPart } from "../utils/constant";
import { channel_IMG_URL_2ndPart } from "../utils/constant";
import { Subscriber_Counter_1stPart } from "../utils/constant";
import { Subscriber_Counter_2ndPart } from "../utils/constant";
import { convertNumber } from "../utils/helper";
import { MdOutlineAddCircle } from "react-icons/md";
import dislikeButton from "../img/dislikeButton.png";
import AfterDislikeButton from "../img/AfterdislikeButton.png";
import likeButton from "../img/likeButton.png";
import afterLikeButton from "../img/afterLike.png";
import { options } from "../utils/helper";
import { AiTwotoneBell } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  addLikedVideo,
  addSubscribe,
  addWatchHistory,
  addWatchLetter,
  removeLikedVideo,
  addDisLikedVideo,
  removeDisLikedVideo,
  removeSubscribe,
  removeWatchLetter,
} from "../utils/reduxStore/watchLetterSlice";

const WatchPageButton = () => {
  const [imgUrl, setImaUrl] = useState();
  const [subscriber, setSubscriber] = useState();
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();

  const watchedVideo = useSelector((store) => store.watchLetter.item);
  const LikedVideos = useSelector((store) => store.watchLetter.LikedVideos);
  const subscribe = useSelector((store) => store.watchLetter.subscribe);
  const watchLetterVideo = useSelector(
    (store) => store.watchLetter.watchLetterItem
  );
  const disLikedVideos = useSelector(
    (store) => store.watchLetter.disLikedVideos
  );
  dispatch(addWatchHistory(watchedVideo));

  const handleSave = () => {
    if (watchLetterVideo.length === 0) {
      dispatch(addWatchLetter(watchedVideo));
    } else {
      if (!watchLetterVideo.some((item) => item.id === watchedVideo.id)) {
        dispatch(addWatchLetter(watchedVideo));
      }
    }
  };

  const handleRemoveSave = () => {
    dispatch(removeWatchLetter(watchedVideo.id));
  };

  const handleLikedVideo = () => {
    dispatch(removeDisLikedVideo(watchedVideo.id));
    if (LikedVideos.length === 0) {
      dispatch(addLikedVideo(watchedVideo));
    } else {
      if (!LikedVideos.some((item) => item.id === watchedVideo.id)) {
        dispatch(addLikedVideo(watchedVideo));
      }
    }
  };

  const handleDisLiked = () => {
    dispatch(removeLikedVideo(watchedVideo.id));
    if (disLikedVideos.length === 0) {
      dispatch(addDisLikedVideo(watchedVideo));
    } else {
      if (!disLikedVideos.some((item) => item.id === watchedVideo.id)) {
        dispatch(addDisLikedVideo(watchedVideo));
      }
    }
  };

  const handleSubscribe = () => {
    if (subscribe.length === 0) {
      dispatch(addSubscribe(watchedVideo));
    } else {
      if (!subscribe.some((item) => item.id === watchedVideo.id)) {
        dispatch(addSubscribe(watchedVideo));
      }
    }
  };

  const handleUnSubscribe = () => {
    dispatch(removeSubscribe(watchedVideo.id));
  };

  useEffect(() => {
    getChannel_IMG_URL();
  }, []);

  useEffect(() => {
    getSubscriberCounter();
  }, []);

  const getChannel_IMG_URL = async () => {
    const data = await fetch(
      channel_IMG_URL_1stPart + channelId + channel_IMG_URL_2ndPart
    );
    const json = await data.json();
    const Url = json.items[0].snippet.thumbnails.default.url;
    setImaUrl(Url);
  };

  const getSubscriberCounter = async () => {
    const data = await fetch(
      Subscriber_Counter_1stPart + channelId + Subscriber_Counter_2ndPart
    );
    const json = await data.json();
    const subscriberCount = json.items[0].statistics.subscriberCount;
    setSubscriber(subscriberCount);
  };

  const { snippet, statistics } = watchedVideo;
  const { channelTitle, title, channelId, publishedAt } = snippet;

  const dateTime = new Date(publishedAt);
  const publishDate = dateTime.toLocaleDateString("en-US", options);

  return (
    <div className=" w-[99.5%]">
      <div className="mt-2">
        <h1 className="font-bold text-lg"> {snippet.title} </h1>
      </div>
      <div className="flex ">
        <div className="flex">
          <div className="flex mt-2">
            <img
              className="w-[40px] h-[40px] rounded-full"
              alt="channelUrl"
              src={imgUrl}
            />
            <div className="ml-2">
              <h1 className="text-lg font-bold">{snippet.channelTitle}</h1>
              <p className="text-[14px] text-gray-800">
                {" "}
                {convertNumber(subscriber)} subscribers{" "}
              </p>
            </div>
          </div>
          <button
            className={`pl-3 pr-4 py-1 ml-7 mt-4 ${
              !subscribe.some((item) => item.id === watchedVideo.id)
                ? "bg-black hover:bg-gray-800 duration-200"
                : "bg-gray-300 hover:bg-gray-400 duration-200"
            } rounded-full text-white`}
            onClick={handleSubscribe}
          >
            {!subscribe.some((item) => item.id === watchedVideo.id) ? (
              "Subscribe"
            ) : (
              <p onClick={handleUnSubscribe} className="flex text-black ">
                {" "}
                <AiTwotoneBell className="text-2xl mr-2" /> Subscribed
              </p>
            )}
          </button>
        </div>
        <div className="flex ml-auto ">
          <div className="mt-4">
            <button
              className="bg-gray-300 rounded-l-full hover:bg-gray-400 px-3 py-1 duration-200"
              onClick={handleLikedVideo}
            >
              <div className="flex">
                {!LikedVideos.some((item) => item.id === watchedVideo.id) ? (
                  <img className="w-[30px]" src={likeButton} />
                ) : (
                  <img className="w-[29px] h-[28.5px]" src={afterLikeButton} />
                )}
                {!statistics ? (
                  <p className="ml-2 mt-[3px]">Nan</p>
                ) : (
                  <p className="ml-2 mt-1">
                    {convertNumber(statistics.likeCount)}
                  </p>
                )}
              </div>
            </button>
            <button
              className="bg-gray-300 rounded-r-full hover:bg-gray-400 duration-200 px-3 py-1"
              onClick={handleDisLiked}
            >
              {!disLikedVideos.some((item) => item.id === watchedVideo.id) ? (
                <img className="w-[30px] ml-1" src={dislikeButton} />
              ) : (
                <img
                  className="w-[30px] h-[28px] ml-1"
                  src={AfterDislikeButton}
                />
              )}
            </button>
          </div>
          <div className="mt-3">
            <button
              className="px-4 py-2 ml-2 mt-1 bg-gray-300 rounded-full hover:bg-gray-400 duration-200"
              onClick={handleSave}
            >
              {!watchLetterVideo.some((item) => item.id === watchedVideo.id) ? (
                <div className="flex">
                  <MdOutlineAddCircle className="mt-1" />
                  <p className="ml-1">Save</p>
                </div>
              ) : (
                <div className="flex" onClick={handleRemoveSave}>
                  <AiFillCheckCircle className="mt-1 mr-1" />
                  <p>Saved</p>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mt-3 p-2 rounded-xl hover:bg-gray-300 duration-200">
        {!statistics ? (
          <p className="ml-2 mt-[3px]">views: Not Found </p>
        ) : (
          <p className="font-bold">
            {" "}
            {convertNumber(statistics.viewCount)} views
          </p>
        )}
        <p className="cursor-pointer font-bold">
          publish Date : {publishDate.substring(0, 40)}
        </p>
        {more ? (
          <>
            <p>{snippet.description.substring(0, 1000)}</p>
            <p
              className="cursor-pointer  text-blue-700"
              onClick={() => setMore(false)}
            >
              Less...
            </p>
          </>
        ) : (
          <div className="">
            <p>{snippet.description.substring(0, 100)}</p>
            <p
              className="cursor-pointer text-blue-700"
              onClick={() => setMore(true)}
            >
              ...more
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPageButton;
