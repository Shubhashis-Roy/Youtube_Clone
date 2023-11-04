import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import Bar from "../Common/Bar";
import { headerButtonClose } from "../../utils/reduxStore/appSlice";

const ShowSearchResults = () => {
  const searchResults = useSelector((store) => store.searchResults.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerButtonClose());
  }, []);

  if (!searchResults.length) {
    return (
      <div>
        <div className="flex">
          <Bar />
          <div className="mt-20 ml-[98px]">
            <h1 className=" font-bold text-2xl ml-16 mt-6">Search Results</h1>
            <h1 className="mt-10 ml-16">No Results Found.</h1>
          </div>
        </div>
        ;
      </div>
    );
  }

  return (
    <div>
      <Bar />
      <div className="ml-[98px] mt-[85px]">
        {searchResults.map((item) => (
          <Link key={item.id.videoId} to={"/watch?v=" + item.id.videoId}>
            <SearchVideoCard info={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowSearchResults;
