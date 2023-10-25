import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { channel_IMG_URL_1stPart } from "../utils/constant";
import { channel_IMG_URL_2ndPart } from "../utils/constant";
import { Subscriber_Counter_1stPart } from "../utils/constant";
import { Subscriber_Counter_2ndPart } from "../utils/constant";
import { convertNumber } from "../utils/helper";
import { MdOutlineAddCircle } from "react-icons/md";
import dislikeButton from "../img/dislikeButton.png";
import likeButton from "../img/likeButton.png";
import afterLikeButton from "../img/afterLike.png";
import { options } from "../utils/helper";
import {
  addLikedVideo,
  addSubscribe,
  addWatchHistory,
  addWatchLetter,
} from "../utils/reduxStore/watchLetterSlice";
import { useSearchParams } from "react-router-dom";

const WatchPageButton = () => {
  const [imgUrl, setImaUrl] = useState();
  const [subscriber, setSubscriber] = useState();
  const [more, setMore] = useState(false);
  const [like, setLike] = useState();
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  const watchedVideo = useSelector((store) => store.watchLetter.item);
  dispatch(addWatchHistory(watchedVideo));

  const handleSave = () => {
    dispatch(addWatchLetter(watchedVideo));
  };

  const handleLikedVideo = () => {
    dispatch(addLikedVideo(watchedVideo));
    setLike(!like);
  };

  const handleSubscribe = () => {
    dispatch(addSubscribe(watchedVideo));
  };

  const { snippet, statistics } = watchedVideo;
  const { channelTitle, title, channelId, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;

  const dateTime = new Date(publishedAt);
  const publishDate = dateTime.toLocaleDateString("en-US", options);

  useEffect(() => {
    getChannel_IMG_URL();
  }, []);

  const getChannel_IMG_URL = async () => {
    const data = await fetch(
      channel_IMG_URL_1stPart + channelId + channel_IMG_URL_2ndPart
    );
    const json = await data.json();
    const Url = json.items[0].snippet.thumbnails.default.url;
    setImaUrl(Url);
  };

  useEffect(() => {
    getSubscriberCounter();
  }, []);

  const getSubscriberCounter = async () => {
    const data = await fetch(
      Subscriber_Counter_1stPart + channelId + Subscriber_Counter_2ndPart
    );
    const json = await data.json();
    const subscriberCount = json.items[0].statistics.subscriberCount;
    setSubscriber(subscriberCount);
  };

  return (
    <>
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
            className="px-4 py-1 ml-8 mt-5 bg-black rounded-full text-white"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
        <div className="flex ml-[135px]">
          <div className="mt-4">
            <button
              className="bg-gray-300 rounded-l-full hover:bg-gray-400 px-3 py-1"
              onClick={handleLikedVideo}
            >
              <div className="flex">
                {like ? (
                  <img className="w-[30px]" src={likeButton} />
                ) : (
                  <img className="w-[29px] h-[28.5px]" src={afterLikeButton} />
                )}
                <p className="ml-2 mt-1"> 155k</p>
              </div>
            </button>
            <button className="bg-gray-300 rounded-r-full hover:bg-gray-400 px-3 py-1">
              <img className="w-[30px] ml-1" src={dislikeButton} />
            </button>
          </div>
          <div className="mt-3">
            <button
              className="px-4 py-2 ml-2 mt-1 bg-gray-300 rounded-full hover:bg-gray-400"
              onClick={handleSave}
            >
              <div className="flex">
                <MdOutlineAddCircle className="mt-1" />
                <p className="ml-1">Save</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mt-3 p-2 rounded-xl hover:bg-gray-300 ">
        <p className="font-bold"> {convertNumber(viewCount)} views</p>
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
    </>
  );
};

export default WatchPageButton;
