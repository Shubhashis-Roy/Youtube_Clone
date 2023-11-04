import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WatchHistoryCard from "./WatchHistoryCard";
import Bar from "../Common/Bar";
import { RiDeleteBin6Line } from "react-icons/ri";
import { clearHistory } from "../../utils/reduxStore/watchVideoSlice";
import { closeMenu, headerButtonClose } from "../../utils/reduxStore/appSlice";

const WatchHistroy = () => {
  const WatchHistory = useSelector((store) => store.watchedVideo.watchHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerButtonClose());
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  if (WatchHistory.length === 0) {
    return (
      <div className="flex">
        <Bar />
        <div className="mt-20 ml-[98px]">
          <h1 className=" font-bold text-2xl ml-7 mt-6">Watch History</h1>
          <h1 className="mt-10 ml-7">This list has no videos.</h1>
        </div>
      </div>
    );
  }

  const data = [];
  const uniqueIds = [];

  WatchHistory.filter((item) => {
    if (item.id) {
      let foundIndex = uniqueIds.indexOf(item.id);
      // if id is not yet pushed to array
      if (foundIndex === -1) {
        data.push(item);
        uniqueIds.push(item.id);
      }
    }
  });

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  const WatchHistoryData = data.reverse();
  const totalVideo = WatchHistoryData.length;

  return (
    <div className="flex">
      <Bar />
      <div className=" ml-[98px] mt-20">
        <h1 className="p-2 m-2 ml-4 font-bold text-3xl">Watch History</h1>
        <div className="mt-8">
          {WatchHistoryData.map((item) => (
            <Link to={"/watch?v=" + item.id}>
              <WatchHistoryCard info={item} />
            </Link>
          ))}
        </div>
      </div>
      <div className=" mt-[120px] ml-[75%] fixed px-10 pt-14 h-[40%] rounded-lg bg-[#509bc7] ">
        <button
          className="font-bold text-lg py-2 px-5 bg-gray-200 rounded-full flex hover:bg-gray-400 duration-200"
          onClick={handleClearHistory}
        >
          <RiDeleteBin6Line className="mt-[5px] mr-2" />
          Clear History
        </button>
        <p className="mt-4 ml-8 text-lg font-bold text-gray-200">
          {" "}
          Total Videos: {totalVideo}{" "}
        </p>
      </div>
    </div>
  );
};

export default WatchHistroy;
