import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Youtube_Suggetions_API, Youtube_Search_API } from "../utils/constant";
import { chacheResults } from "../utils/reduxStore/searchSlice";
import { addSearchResults } from "../utils/reduxStore/searchResultSlice";
import { SlMagnifier } from "react-icons/sl";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetion, setSuggetion] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState();
  const searchChache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (searchQuery.length !== 0) {
      navigate("/search-results");
      const data = await fetch(Youtube_Search_API + searchText.current.value);
      const json = await data.json();
      dispatch(addSearchResults(json.items));
    }
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
      <form onSubmit={(e) => e.preventDefault()} className=" flex">
        <input
          ref={searchText}
          className="w-[500px] ml-8 border border-gray-400 p-[6px] rounded-l-full pl-4 mt-1"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // onMouseEnter={() => setShowSuggetion(true)}
          // onMouseLeave={() => setShowSuggetion(false)}
          onFocus={() => setShowSuggetion(true)}
          onBlur={() => setShowSuggetion(false)}
        />
        <div
          className="mt-1 border-b border-t border-r border-gray-400 rounded-r-full bg-gray-200 px-5 cursor-pointer"
          onClick={getSearchResults}
        >
          <button>
            <SlMagnifier className="mt-3" />
          </button>
        </div>
      </form>

      {showSuggetion && (
        <div className="fixed ml-8 bg-white px-2 py-2 shadow-2xl w-[440px] rounded-lg border border-gray-200">
          {suggetion.map((item) => (
            <ul>
              <li
                key={item}
                className="py-1 pl-1 shadow-sm hover:bg-gray-200 rounded-lg cursor-pointer flex"
                onClick={() => handleSearch(item)}
              >
                <SlMagnifier className="mt-1" /> <p className="pl-3"> {item}</p>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
