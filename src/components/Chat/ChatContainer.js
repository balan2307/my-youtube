import React from "react";

import { useEffect } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../store/chatSlice";
import { generateRandomName, generateRandomChat } from "../../utils/helper";

function ChatContainer() {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.chats);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        chatActions.addChats({
          name: generateRandomName(),
          message: generateRandomChat(),
        })
      );
    }, 2000);

    return () => {
      dispatch(chatActions.clearChats());
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <p className="p-2 border   rounded-tl-lg rounded-tr-lg">Live Chat</p>
      <div className=" h-[85%] border  border-t-0 rounded-bl-0 rounded-br-0">
        <div className="flex flex-col-reverse  h-[100%] gap-2 p-2  overflow-y-scroll">
          {chats?.map((chat, i) => (
            <Chat key={i} name={chat.name} message={chat.message}></Chat>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatContainer;
