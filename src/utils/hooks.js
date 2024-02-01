import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";


export const useVideoList = () => {
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        youtubeVideo();
    }, []);
    const youtubeVideo = async () => {
        try {
            const data = await fetch(YOUTUBE_API);
            const json = await data.json();
            setVideoList(json.items);
        } catch (error) {
            console.log(error.message);
        }
    };
    return videoList
}

export const useOnline = () => {
    const [onlineStatus, setOnlineStatus] = useState(false)
    window.addEventListener("online", () => {
        setOnlineStatus(false)
    })
    window.addEventListener("offline", () => {
        setOnlineStatus(true)
    })
    return onlineStatus
}