import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 py-1 m-2 bg-gray-100 hover:bg-gray-300 duration-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
