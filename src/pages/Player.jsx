import React from "react";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import {
  MdWatchLater,
  MdPlaylistAdd,
  MdPlaylistAddCheck,
} from "react-icons/md";
import "./index.css";
import { useParams } from "react-router-dom";
import { useVideos } from "../context/VideoContext";
import { ADD_TO_LIKE, REMOVE_FROM_LIKE } from "../reducer/LikeReducer";
import { useLike } from "../context/LikeContext";

export const Player = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();
  const { likedState, likedDispatch } = useLike();

  const getVideoDetails = (id, videos) => {
    const videoDetails = videos.find((video) => id === video._id);
    return videoDetails;
  };

  const videoToBeDisplayed = getVideoDetails(videoId, videos);

  const { title, description, videoUrl } = videoToBeDisplayed;

  return (
    <>
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        className="player-wrapper p-xs m-xs"
      />
      <div className="flex flex-align-center flex-gap">
        <div
          className="p-m m-m flex flex-align-center txt-cursor"
          onClick={() =>
            likedState.liked.includes(videoToBeDisplayed)
              ? likedDispatch({
                  type: REMOVE_FROM_LIKE,
                  payload: videoToBeDisplayed,
                })
              : likedDispatch({
                  type: ADD_TO_LIKE,
                  payload: videoToBeDisplayed,
                })
          }
        >
          <AiFillLike
            size={30}
            color={
              likedState.liked.includes(videoToBeDisplayed) ? "blue" : "black"
            }
          />
          <p> Like </p>
        </div>
        <div className="p-m m-m flex flex-align-center txt-cursor">
          <MdWatchLater size={30} />
          <p> Watch Later </p>
        </div>
        <div className="p-m m-m flex flex-align-center txt-cursor">
          <MdPlaylistAdd size={30} />
          <p> Add to Playlist </p>
        </div>
      </div>
      <h1 className="player-title p-xs">{title}</h1>
      <div className="p-m m-m">{description}</div>
    </>
  );
};
