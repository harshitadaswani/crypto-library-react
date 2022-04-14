import React from "react";
import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const defaultValue = {};

const VideoContext = createContext(defaultValue);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(true);

  const getVideos = async () => {
    try {
      const { data } = await axios.get("/api/videos");
      setLoader(false);
      setVideos(data.videos);
    } catch (err) {
      setLoader(false);
      console.error(err);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <VideoContext.Provider value={{ videos, setVideos, loader, setLoader }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => useContext(VideoContext);
