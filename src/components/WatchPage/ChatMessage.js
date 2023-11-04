import React from "react";

const ChatMessage = ({ name, src, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="w-8 h-8 rounded-full" alt="user" src={src} />
      <div className="pl-3 ">
        <span className="text-gray-700 text-[15px] "> {name} </span>
        <span className="ml-2 text-gray-950 text-[15px]"> {message} </span>
      </div>
    </div>
  );
};

export default ChatMessage;
