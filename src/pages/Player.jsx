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
import { useWatchLater } from "../context/WatchLaterContext";
import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from "../reducer/WatchLaterReducer";
import { useHistory } from "../context/HistoryContext";
import { ADD_TO_HISTORY } from "../reducer/HistoryReducer";
import { Toaster } from "react-hot-toast";
import {
  addLikeToastFunction,
  addWatchToastFunction,
  removeLikeToastFunction,
  removeWatchToastFunction,
} from "../utils/ToastUtils";
import { PlaylistModal } from "../components";
import { usePlaylist } from "../context/PlaylistContext";

export const Player = () => {
  const { videoId } = useParams();
  const { videos } = useVideos();
  const { setOpenModal } = usePlaylist();
  const { likedState, likedDispatch } = useLike();
  const { watchState, watchDispatch } = useWatchLater();
  const { historyDispatch } = useHistory();

  const getVideoDetails = (id, videos) => {
    const videoDetails = videos.find((video) => id === video._id);
    return videoDetails;
  };

  const videoToBeDisplayed = getVideoDetails(videoId, videos);

  const { title, description, videoUrl } = videoToBeDisplayed;

  return (
    <>
      <Toaster position="top-right" />
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        className="player-wrapper p-xs m-xs"
        onStart={() =>
          historyDispatch({
            type: ADD_TO_HISTORY,
            payload: videoToBeDisplayed,
          })
        }
        controls
      />
      <div className="flex flex-align-center flex-gap">
        <div
          className="p-m m-m flex flex-align-center txt-cursor"
          onClick={() => {
            if (likedState.liked.includes(videoToBeDisplayed)) {
              likedDispatch({
                type: REMOVE_FROM_LIKE,
                payload: videoToBeDisplayed,
              });
              removeLikeToastFunction();
            } else {
              likedDispatch({
                type: ADD_TO_LIKE,
                payload: videoToBeDisplayed,
              });
              addLikeToastFunction();
            }
          }}
        >
          <AiFillLike
            size={30}
            color={
              likedState.liked.includes(videoToBeDisplayed) ? "blue" : "black"
            }
          />
          <p> Like </p>
        </div>
        <div
          className="p-m m-m flex flex-align-center txt-cursor"
          onClick={() => {
            if (watchState.watchLater.includes(videoToBeDisplayed)) {
              watchDispatch({
                type: REMOVE_FROM_WATCHLIST,
                payload: videoToBeDisplayed,
              });
              removeWatchToastFunction();
            } else {
              watchDispatch({
                type: ADD_TO_WATCHLIST,
                payload: videoToBeDisplayed,
              });
              addWatchToastFunction();
            }
          }}
        >
          <MdWatchLater
            size={30}
            color={
              watchState.watchLater.includes(videoToBeDisplayed)
                ? "blue"
                : "black"
            }
          />
          <p> Watch Later </p>
        </div>
        <div
          className="p-m m-m flex flex-align-center txt-cursor"
          onClick={() => setOpenModal(true)}
        >
          <MdPlaylistAdd size={30} />
          <p> Add to Playlist </p>
        </div>
      </div>
      <h1 className="player-title p-xs">{title}</h1>
      <div className="p-m m-m">{description}</div>
      <PlaylistModal video={videoToBeDisplayed} />
    </>
  );
};
