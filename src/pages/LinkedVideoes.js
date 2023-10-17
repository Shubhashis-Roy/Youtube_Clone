import React from "react";
import { useSelector } from "react-redux";
import WatchLetterCard from "./WatchLetterCard";
import { Link } from "react-router-dom";

const LinkedVideoes = () => {
  const LinkedVideoes = useSelector((store) => store.watchLetter.LinkedVideoes);
  if (LinkedVideoes.length === 0) return;

  //   console.log(LinkedVideoes.length);

  const totalVideo = LinkedVideoes.length;

  const img = LinkedVideoes[0];
  const { snippet, statistics } = img;
  const { thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex ">
      <div className="mt-4 bg-gray-700 w-[300px] h-[440px] ml-4 rounded-xl">
        <img
          className="w-[260px] h-[180px] rounded-xl m-5 "
          alt="thumnail"
          src={thumbnails.standard.url}
        />
        <div className="ml-5">
          <h1 className="text-white font-bold text-2xl">Liked Videos</h1>
          <p className="text-white mt-3"> {totalVideo} videos </p>
          <p className="text-white "> {viewCount} views </p>
        </div>
        <div className="flex ml-5 mt-4">
          <button className="px-11 py-2 my-2 bg-white rounded-full">
            Play
          </button>
          <button className="px-9 py-2 my-2 ml-3 bg-gray-600 text-white rounded-full">
            Shuffle
          </button>
        </div>
      </div>
      <div className="mt-3">
        {LinkedVideoes.map((item) => (
          <Link to={"/watch?v=" + item.id}>
            <WatchLetterCard info={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LinkedVideoes;
