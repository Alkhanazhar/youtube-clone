import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch, toggleIsMenuOpen } from "../redux/appSlice";
import HamburgerIcons, { Play, UserIcon, YoutubeIcon } from "../utils/Icons";
import { Link, useNavigate } from "react-router-dom";
import { searchQuery, searchResults } from "../utils/constants";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleIsMenuOpen());
  };
  const handleChange = async (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      searchQuery(search).then((data) => setSuggestion(data[1]));
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);
  const handleClick = () => {
    if (search.length > 0) {
      searchResults(search).then((data) => dispatch(addSearch(data)));
      setShowSuggestion(false);
      setSearch("");
      navigate("/search");
    }
  };

  return (
    <div className="grid grid-cols-3 container m-auto py-2">
      <div className="text-2xl flex gap-3 items-center">
        <div onClick={handleToggle} className="cursor-pointer">
          <HamburgerIcons />
        </div>
        <div className="flex items-center cursor-default">
          <Link to={"/"}>
            {/* <Play /> */}
            <YoutubeIcon />
          </Link>
          Youtube
        </div>
      </div>
      <div className="flex">
        <input
          type="text"
          className="w-full text-black px-4 border border-l"
          value={search}
          placeholder="search for Videos"
          onChange={handleChange}
          onFocus={() => setShowSuggestion(true)}
        />
        <button
          className="bg-[#ff3d00] px-4 text-white font-semibold"
          onClick={handleClick}
        >
          search
        </button>
        {showSuggestion && (
          <ul
            className="absolute top-8 bg-white p-2 rounded-lg z-50"
            onBlur={() => setShowSuggestion(false)}
          >
            {suggestion.length > 0 &&
              suggestion.map((item, id) => (
                <li
                  key={id}
                  onClick={() => setSearch(item)}
                  className="hover:bg-gray-200 cursor-pointer p-1"
                >
                  {item}
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center items-center">
        <div className="cursor-pointer">
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
