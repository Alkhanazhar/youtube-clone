import React from "react";
import ButtonList from "./ButtonList";
import VideoList from "./VideoList";

const MainBar = () => {
  return (
    <div className="flex flex-col min-h-screen  p-4">
      <ButtonList />
      <VideoList />
    </div>
  );
};

export default MainBar;
