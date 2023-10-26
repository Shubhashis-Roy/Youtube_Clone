import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WatchLetterCard from "./WatchLetterCard";
import { Link } from "react-router-dom";
import Bar from "../components/Bar";
import { convertNumber } from "../utils/helper";
import PlayButton from "../img/PlayButton.png";
import { closeMenu, headerButtonClose } from "../utils/reduxStore/appSlice";

const LikedVideos = () => {
  const LikedVideos = useSelector((store) => store.watchLetter.LikedVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerButtonClose());
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  if (LikedVideos.length === 0) {
    return (
      <div className="flex">
        <Bar />
        <div className="mt-20 ml-[98px]">
          <h1 className=" font-bold text-2xl ml-7 mt-6">Liked videos</h1>
          <h1 className="mt-10 ml-7">
            {" "}
            There are no videos in this playlist yet.
          </h1>
        </div>
      </div>
    );
  }

  const totalVideo = LikedVideos.length;

  const img = LikedVideos[0];
  const { snippet, statistics } = img;
  const { thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex ">
      <Bar />
      <div className="mt-20 bg-gray-700 w-[360px] h-[525px] ml-[98px] rounded-xl fixed">
        <Link to={"/watch?v=" + LikedVideos[0].id}>
          <img
            className="w-[310px] h-[200px] rounded-xl m-6 "
            alt="thumnail"
            src={thumbnails.standard.url}
          />
        </Link>
        <div className="ml-5">
          <h1 className="text-white font-bold text-2xl">Liked Videos</h1>
          <p className="text-white "> {convertNumber(viewCount)} views </p>
          <p className="text-white mt-3"> {totalVideo} videos </p>
        </div>
        <div className="flex ml-5 mt-6">
          <Link to={"/watch?v=" + LikedVideos[0].id}>
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
        {LikedVideos.map((item) => (
          <Link to={"/watch?v=" + item.id}>
            <WatchLetterCard info={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;
