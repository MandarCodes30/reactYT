import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import CommentsConatiner from "./Comments";
import SideChat from "./SideChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex-col w-full">
    <div className="p-2 flex w-full">
      <div>
      <iframe
        className="rounded-lg"
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="Gaav Sutana Official Song | BOYZ 4 | Avadhoot Gupte | Ganesh Shinde | Pratik Lad, Ritooja Shinde"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full">
        <SideChat/>
      </div>
    </div>
    <div>
      <CommentsConatiner/>
    </div>
    </div>
  );
};

export default WatchPage;
