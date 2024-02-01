import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4 m-2 bg-gray-500 py-1 text-white rounded-lg">
      {name}
    </button>
  );
};

export default Button;
