import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WatchLetterCard from "./WatchLetterCard";
import { Link } from "react-router-dom";
import { closeMenu, headerButtonClose } from "../utils/reduxStore/appSlice";
import Bar from "../components/Bar";
import { convertNumber } from "../utils/helper";
import PlayButton from "../img/PlayButton.png";

const WatchLetter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerButtonClose());
  });

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const watchLetterItem = useSelector(
    (store) => store.watchLetter.watchLetterItem
  );
  if (watchLetterItem.length === 0) {
    return (
      <div className="flex">
        <Bar />
        <div className="mt-20 ml-[98px]">
          <h1 className=" font-bold text-2xl ml-7 mt-6">Watch letter</h1>
          <h1 className="mt-10 ml-7">
            There are no videos in this playlist yet.
          </h1>
        </div>
      </div>
    );
  }

  const totalVideo = watchLetterItem.length;

  const img = watchLetterItem[0];
  const { snippet, statistics } = img;
  const { thumbnails } = snippet;

  return (
    <div className="flex ">
      <Bar />
      <div className="mt-20 bg-gray-700 w-[360px] h-[525px] ml-[98px] rounded-xl fixed">
        <Link to={"/watch?v=" + watchLetterItem[0].id}>
          <img
            className="w-[310px] h-[180px] rounded-xl m-6 "
            alt="thumnail"
            src={thumbnails.medium.url}
          />
        </Link>
        <div className="ml-5">
          <h1 className="text-white font-bold text-2xl">Watch letter</h1>

          {!statistics ? (
            <p className="text-white "> Nan views </p>
          ) : (
            <p className="text-white ">
              {" "}
              {convertNumber(statistics.viewCount)} views{" "}
            </p>
          )}

          <p className="text-white mt-3"> {totalVideo} videos </p>
        </div>
        <div className="flex ml-5 mt-6">
          <Link to={"/watch?v=" + watchLetterItem[0].id}>
            <button className="px-10 pt-[7px] my-2 bg-white rounded-full flex">
              <img src={PlayButton} className="mr-1" />
              Play
            </button>
          </Link>
          <button className="px-9 py-2 my-2 ml-3 bg-gray-600 text-white rounded-full">
            Shuffle
          </button>
        </div>
      </div>
      <div className="mt-[95px] ml-[59%] ">
        {watchLetterItem.map((item) => (
          <Link to={"/watch?v=" + item.id}>
            <WatchLetterCard info={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchLetter;
