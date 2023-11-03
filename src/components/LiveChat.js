import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/reduxStore/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";
import { LiveChat_SRC, LiveChat_UserSrc } from "../utils/constant";
import { AiOutlineSend } from "react-icons/ai";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const [isShowChat, setIsShowChat] = useState(true);
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
      {!isShowChat ? (
        <div className=" w-[435px] ml-6 h-[20px] text-center mb-24 font-bold">
          <button
            onClick={() => setIsShowChat(true)}
            className="rounded-full hover:bg-gray-200 duration-300 border py-2 w-full text-[14px]"
          >
            Show Chat
          </button>
        </div>
      ) : (
        <>
          <div className="border border-gray-400 w-[435px] ml-6 rounded-t-xl bg-gray-100 flex">
            <p className="py-3 pl-6 "> 🔴 </p>
            <p className="py-3 pl-3 "> Live Chat</p>
          </div>
          <div className=" w-[435px] h-[400px] ml-6 p-2 border-l border-r border-gray-400 bg-gray-100 overflow-y-scroll flex flex-col-reverse ">
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
            className="w-[435px] p-1 ml-6 border border-gray-400"
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
                className="ml-9 w-[87%] outline-none  p-[1px] border-b border-gray-500 text-gray-950 focus:border-blue-500 focus:border-b-[2px] pb-2"
                type="text"
                maxLength="200"
                value={liveMessage}
                placeholder="Chat..."
                onChange={(e) => setLiveMessage(e.target.value)}
              />
              <div className="flex justify-end text-gray-500 text-[13px] mt-2">
                <span className="mr-3">{liveMessage?.length}/200</span>
                <button className="text-xl px-3 ">
                  <AiOutlineSend />
                </button>
              </div>
            </div>
          </form>
          <div className=" w-[435px] text-center rounded-b-xl ml-6  p-2 border-l border-r border-b border-gray-400 ">
            <button
              onClick={() => setIsShowChat(false)}
              className="hover:bg-gray-200 duration-300 py-1 px-[40%] hover:rounded-full"
            >
              Hide Chat
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveChat;
