import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";
import { useSearchParams } from "react-router-dom";
import { toggleFalse } from "../redux/appSlice";

const Watch = () => {
  const [watchId] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleFalse());
  }, []);
  return (
    <div className="flex">
      {isMenuOpen && <SideBar />}
      <div>
        <iframe
          // className="lg:w-[1200px] w-screen h-[50vh] lg:h-[600px]"
          width={"1200"}
          height={"600"}
          src={
            "https://www.youtube.com/embed/" +
            watchId.get("v") +
            "?autoplay=1&mute=0"
          }
          title="🔴 Among Us with Gang! #Nostalgia"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;

