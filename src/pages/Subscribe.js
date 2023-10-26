import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SubscribeVideoCard from "./SubscribeVideoCard";
import { closeMenu, headerButtonClose } from "../utils/reduxStore/appSlice";
import Bar from "../components/Bar";

const Subscribe = () => {
  const subscribeVideo = useSelector((store) => store.watchLetter.subscribe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerButtonClose());
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  if (subscribeVideo.length === 0) {
    return (
      <div className="flex">
        <Bar />
        <div className="mt-20 ml-[98px]">
          <h1 className=" font-bold text-2xl ml-7 mt-6">Subscribes</h1>
          <h1 className="mt-10 ml-7">This list has no videos.</h1>
        </div>
      </div>
    );
  }

  const totalVideo = subscribeVideo.length;

  return (
    <div>
      <Bar />
      <h1 className="ml-[105px] mt-[100px] font-bold">
        Total Videos: {totalVideo}{" "}
      </h1>
      <div className="flex flex-wrap mt-3 ml-[90px]">
        {subscribeVideo.map((video) => (
          <>
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <SubscribeVideoCard info={video} />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Subscribe;
