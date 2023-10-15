import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/reduxStore/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";

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
          message: makeid(15) + " " + "🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className=" w-full h-[400px]  ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-1 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log("Onsubmit", liveMessage);
          dispatch(
            addMessage({
              name: "subha",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-80 p-[1px] border border-red-400"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 bg-green-200 px-3 py-1 rounded-lg ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
