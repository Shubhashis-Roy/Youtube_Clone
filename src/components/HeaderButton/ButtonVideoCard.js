import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/reduxStore/watchVideoSlice";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import HomeBar from "../Home/HomeBar";
import { headerButtonShow } from "../../utils/reduxStore/appSlice";

const ButtonVideoCard = () => {
  const dispatch = useDispatch();
  const buttonResultsData = useSelector(
    (store) => store.searchResults.buttonResults
  );

  useEffect(() => {
    dispatch(headerButtonShow());
  }, []);

  const handleInfo = (data) => {
    dispatch(addItem(data));
  };

  return (
    <div className="flex">
      <div className="mt-[104px]">
        <HomeBar />
      </div>
      <div className="mt-[123px] ml-[89px] flex flex-wrap">
        {buttonResultsData?.map((data) => (
          <div className="p-2 mr-4" onClick={handleInfo(data)}>
            <Link to={"/watch?v=" + data?.id?.videoId}>
              <div className="hover:shadow-lg hover:rounded-xl duration-300 pl-2 pt-2 pb-2">
                <img
                  className="rounded-xl h-[250px] w-[355px] hover:rounded-none duration-300"
                  src={data?.snippet?.thumbnails?.high.url}
                  alt="Thumbnails"
                />
                <div className="mt-1 flex">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src={data?.snippet?.thumbnails?.default.url}
                  />
                  <ul>
                    <li className="font-bold">
                      {" "}
                      {data?.snippet?.title?.substring(0, 30)}{" "}
                    </li>
                    <li className="flex">
                      {" "}
                      {data?.snippet?.channelTitle}
                      <BsDot className="mt-1 text-lg" />
                      {(
                        Math.abs(
                          new Date(data?.snippet?.publishedAt) - new Date()
                        ) /
                        (60 * 60 * 24 * 1000)
                      ).toFixed(0)}
                      days ago
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonVideoCard;
