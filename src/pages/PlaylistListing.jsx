import React from "react";
import { PlaylistCard } from "../components";
import { usePlaylist } from "../context/PlaylistContext";
import { DELETE_PLAYLIST } from "../reducer/PlaylistReducer";
import {
  removePlaylistToastFunction,
  emptyPlaylistToastFunction,
} from "../utils/ToastUtils";
import { ImBin } from "react-icons/im";

export const PlaylistListing = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  return (
    <>
      <h2 className="h1-title">Playlist:</h2>
      <PlaylistCard />
    </>
  );
};
