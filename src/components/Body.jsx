import React from "react";
import SideBar from "./SideBar";
import MainBar from "./MianContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {isMenuOpen && <SideBar />}
      <MainBar />
    </div>
  );
};

export default Body;
