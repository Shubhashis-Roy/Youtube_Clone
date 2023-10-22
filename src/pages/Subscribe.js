import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SubscribeVideoCard from "./SubscribeVideoCard";

const Subscribe = () => {
  const subscribeVideo = useSelector((store) => store.watchLetter.subscribe);

  return (
    <div className="flex flex-wrap">
      {subscribeVideo.map((video) => (
        <>
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <SubscribeVideoCard info={video} />
          </Link>
        </>
      ))}
    </div>
  );
};

export default Subscribe;
