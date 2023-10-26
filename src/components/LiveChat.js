import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/reduxStore/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";
import { LiveChat_SRC, LiveChat_UserSrc } from "../utils/constant";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          src: LiveChat_SRC,
          message: makeid(15) + " " + "🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="border border-gray-400 w-[420px] ml-6 rounded-t-xl bg-gray-100 flex">
        <p className="py-3 pl-6 "> 🔴 </p>
        <p className="py-3 pl-3 "> Live Chat</p>
      </div>
      <div className=" w-[420px] h-[400px] ml-6 p-2 border-l border-r border-gray-400 bg-gray-100 overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((c, index) => (
          <ChatMessage
            key={index}
            name={c.name}
            src={c.src}
            message={c.message}
          />
        ))}
      </div>
      <form
        className="w-[420px] rounded-b-lg p-1 ml-6 border border-gray-400"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Subha",
              src: LiveChat_UserSrc,
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="flex ml-3 pt-2">
          <img
            className="w-8 h-8 rounded-full"
            alt="chatLogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Ju7-0_0yWlACt1tNKDc003Rx1D4gN-wvww&usqp=CAU"
          />
          <p className="m-1 pl-2 text-gray-700 text-[15px]">Subha</p>
        </div>
        <div className="ml-5 mb-5">
          <input
            className="w-[290px] p-[1px] border-b border-gray-500 text-gray-950"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className=" mt-0 ml-4 bg-green-200 px-3 py-1 rounded-lg ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
