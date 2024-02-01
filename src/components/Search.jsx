import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const Search = () => {
  const searchDataRedux = useSelector((store) => store.app.searchResults);
  console.log(searchDataRedux)
  return (
    <div className="m-auto">
      {searchDataRedux.length > 0 &&
        searchDataRedux.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id.videoId}>
            <VideoCard videoData={video} />
          </Link>
        ))}
    </div>
  );
};

export default Search;
