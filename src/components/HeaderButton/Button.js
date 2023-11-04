import React, { useState } from "react";
import { Youtube_Search_API } from "../../utils/constant";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addButtonResults } from "../../utils/reduxStore/searchResultSlice";

const Button = ({ name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const handleButtonClicked = async () => {
    const data = await fetch(Youtube_Search_API + name);
    const json = await data.json();
    dispatch(addButtonResults(json.items));
    navigate("/fiter-button");
    setClick(true);
  };

  return (
    <div onClick={handleButtonClicked} onBlur={() => setClick(false)}>
      <button
        className={`px-2 py-1 m-2 ${
          click && "bg-gray-800 text-white"
        } bg-gray-100 hover:bg-gray-300 duration-200 rounded-lg`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
