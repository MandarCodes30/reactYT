import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatslice";
import { generateRandomName, generateString } from "../utils/helper";

const SideChat = () => {
  const [livechat, setLiveChat] = useState("");
  const chatMessage = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const messagePolling = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateString(10),
        })
      );
    }, 2000);
    return () => clearInterval(messagePolling);
  }, []);
  return (
    <>
      <div className="p-2 m-2 bg-slate-100 border border-black w-full h-[442px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessage.map((c) => (
            <ChatMessages name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "Mandar",
              message: livechat,
            })
          );
          setLiveChat("");
        }}
        className="w-f border border-black rounded-lg"
      >
        <input
          type="text"
          value={livechat}
          className="p-2 m-2 border border-black"
          onChange={(e) => {
            setLiveChat(e.target.value);
          }}
        />
        <button
          className="bg-yellow-100 font-bold p-2 rounded-lg"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default SideChat;
