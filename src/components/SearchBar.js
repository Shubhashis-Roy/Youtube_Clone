import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Youtube_Suggetions_API, Youtube_Search_API } from "../utils/constant";
import { chacheResults } from "../utils/reduxStore/searchSlice";
import { addSearchResults } from "../utils/reduxStore/searchResultSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetion, setSuggetion] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState();
  const searchChache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const searchText = useRef(null);

  // Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchChache[searchQuery]) {
        setSuggetion(searchChache[searchQuery]);
      } else {
        getSearchSuggetions();
      }
    }, 160);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetions = async () => {
    const data = await fetch(Youtube_Suggetions_API + searchQuery);
    const json = await data.json();
    setSuggetion(json[1]);

    dispatch(
      chacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const getSearchResults = async () => {
    const data = await fetch(Youtube_Search_API + searchText.current.value);
    const json = await data.json();
    dispatch(addSearchResults(json.items));
  };

  const handleSearch = async (item) => {
    try {
      const data = await fetch(Youtube_Search_API + item);
      const json = await data.json();
      dispatch(addSearchResults(json.items));
      setSearchQuery(item);
    } catch (err) {
      console.log("fetch err", err);
      // todo : render error in fe
    }
  };

  return (
    <div className="">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="w-1/2 border border-gray-400 p-1 rounded-l-full pl-4"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // onMouseEnter={() => setShowSuggetion(true)}
          // onMouseLeave={() => setShowSuggetion(false)}
          onFocus={() => setShowSuggetion(true)}
          onBlur={() => setShowSuggetion(false)}
        />
        <button
          className="border border-gray-400 p-1 rounded-r-full bg-gray-100 px-4"
          onClick={getSearchResults}
        >
          🔍
        </button>
      </form>

      {showSuggetion && (
        <div className="fixed bg-white px-2 py-2 shadow-2xl w-[440px] rounded-lg border border-gray-200">
          {suggetion.map((item) => (
            <ul>
              <li
                key={item}
                className="py-1 pl-1 shadow-sm hover:bg-gray-200 rounded-lg cursor-pointer"
                onClick={() => handleSearch(item)}
              >
                🔍 {item}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
