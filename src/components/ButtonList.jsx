import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const nameList = [
    "All",
    "music",
    "rihanna",
    "kanye west",
    "post malone",
    "michael",
    "kitten",
    "kitten cat",
    "music",
    "rihanna",
    "kanye west",
    "kitten cat",
  ];
  return (
    <div className="flex flex-wrap">
      {nameList.map((name,id) => (
        <Button key={id} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
