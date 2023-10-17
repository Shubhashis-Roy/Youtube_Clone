import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import ShowSearchResults from "../pages/ShowSearchResults";

const MainContainer = () => {
  const searchResult = useSelector((store) => store.searchResults.results);

  if (!searchResult) return;
  // console.log(searchResult.length);

  return (
    <div>
      <ButtonList />
      {searchResult.length >= 1 ? <ShowSearchResults /> : <VideoContainer />}
    </div>
  );
};

export default MainContainer;
