import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

const ShowSearchResults = () => {
  const searchResults = useSelector((store) => store.searchResults.results);
  return (
    <div className="ml-6">
      {searchResults.map((item) => (
        <Link key={item.id.videoId} to={"/watch?v=" + item.id.videoId}>
          <SearchVideoCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default ShowSearchResults;
