import React from "react";
import { useContext, createContext, useState, useReducer } from "react";
import {
  initialPlaylistValue,
  PlaylistReducer,
} from "../reducer/PlaylistReducer";

const defaultPlaylistValue = {};

const PlaylistContext = createContext(defaultPlaylistValue);

export const PlaylistProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [playlistState, playlistDispatch] = useReducer(
    PlaylistReducer,
    initialPlaylistValue
  );

  console.log(playlistState);
  return (
    <PlaylistContext.Provider
      value={{ openModal, setOpenModal, playlistState, playlistDispatch }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
