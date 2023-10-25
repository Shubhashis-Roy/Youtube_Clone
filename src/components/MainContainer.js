import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import ShowSearchResults from "../pages/ShowSearchResults";

const MainContainer = () => {
  const searchResult = useSelector((store) => store.searchResults.results);

  if (!searchResult) return;

  return (
    <div className="mt-[64px] ">
      <div className="mt-10">
        {searchResult.length >= 1 ? <ShowSearchResults /> : <VideoContainer />}
      </div>
    </div>
  );
};

export default MainContainer;
