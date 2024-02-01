import React from "react";
import VideoCard from "./VideoCard";
import { useVideoList } from "../utils/hooks";
import { Link } from "react-router-dom";

const VideoList = () => {
  const videoList = useVideoList();

  return (
    <div>
      {videoList.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {videoList.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard videoData={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoList;
