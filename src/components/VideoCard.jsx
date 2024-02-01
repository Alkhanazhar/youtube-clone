import React from "react";
import { NumericFormat } from "react-number-format";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;

  return (
    <div className="w-72 p-2 shadow-lg rounded-md h-full">
      <img src={snippet?.thumbnails?.medium.url} alt="video thumbnail" />
      <h2 className="font-semibold">{snippet?.title.substring(0, 40)}</h2>
      {statistics?.viewCount && (
        <p className="flex">
          {
            <NumericFormat
              className="w-20"
              value={statistics?.viewCount}
              allowLeadingZeros
              thousandSeparator=","
            />
          }
          views
        </p>
      )}
    </div>
  );
};

export default VideoCard;
