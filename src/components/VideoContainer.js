import React, { useEffect, useState } from "react";
import { dummy_URL, YouTube_API } from "../utils/constants";
import VideoCard, { AdVideo } from "./VideoCard";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);
  const [pageToken, setPageToken] = useState("")
  const [hasMore,setHasMore] = useState(true);

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    const data = await fetch(`${YouTube_API}&pageToken=${pageToken}`)  ;
    const jsonData = await data.json();
    setVideo((prevVideos)=>[...prevVideos,...jsonData.items]);
    setPageToken(jsonData.nextPageToken);
    setHasMore(!!jsonData.nextPageToken)
    console.log(jsonData);
  };

  return (
    <InfiniteScroll dataLength={videos.length}
    next={getVideosData}
    hasMore={hasMore}
    loader={<h3>Loading!!!</h3>}>
    <div className="flex flex-wrap w-full">
     {videos[0] && <AdVideo info={videos[0]}/> }
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]}/> */}
    </div>
    </InfiniteScroll>
  );
};

export default VideoContainer;
