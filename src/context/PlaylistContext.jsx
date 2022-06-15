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
  const [openNewModal, setOpenNewModal] = useState(false);
  const [playlistState, playlistDispatch] = useReducer(
    PlaylistReducer,
    initialPlaylistValue
  );

  return (
    <PlaylistContext.Provider
      value={{
        openModal,
        setOpenModal,
        openNewModal,
        setOpenNewModal,
        playlistState,
        playlistDispatch,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
