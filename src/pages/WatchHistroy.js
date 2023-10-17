import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WatchHistoryCard from "./WatchHistoryCard";

const WatchHistroy = () => {
  const WatchHistory = useSelector((store) => store.watchLetter.WatchHistory);
  if (WatchHistory.length === 0) return;

  const data = [];
  const uniqueIds = [];

  WatchHistory.filter((item) => {
    if (item.id) {
      let foundIndex = uniqueIds.indexOf(item.id);
      // if id is not yet pushed to array
      if (foundIndex == -1) {
        data.push(item);
        uniqueIds.push(item.id);
      }
    }
  });

  const WatchHistoryData = data.reverse();

  const totalVideo = WatchHistoryData.length;

  return (
    <div className="flex">
      <div className="  ">
        <h1 className="p-2 m-2 font-bold text-xl">Watch History</h1>
        {WatchHistoryData.map((item) => (
          <Link to={"/watch?v=" + item.id}>
            <WatchHistoryCard info={item} />
          </Link>
        ))}
      </div>
      <div className=" mt-16 ml-6">
        <button className="font-bold text-xl py-2 px-5 bg-gray-300 rounded-full">
          🏚️ Clear History
        </button>
        <p className="mt-4 ml-10 text-lg font-bold">
          {" "}
          Total Videos: {totalVideo}{" "}
        </p>
      </div>
    </div>
  );
};

export default WatchHistroy;
