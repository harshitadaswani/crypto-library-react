import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { usePlaylist } from "../../../context/PlaylistContext";
import { CREATE_PLAYLIST } from "../../../reducer/PlaylistReducer";
import { addPlaylistToastFunction } from "../../../utils/ToastUtils";

export const NewPlaylistModal = ({ video }) => {
  const {
    openNewModal,
    setOpenNewModal,
    openModal,
    setOpenModal,
    playlistDispatch,
  } = usePlaylist();
  const [input, setInput] = useState("");
  return (
    <>
      {!openNewModal && (
        <div
          className="flex flex-row flex-gap"
          onClick={() => setOpenNewModal(() => !openNewModal)}
        >
          <FaPlus />
          <p>Create New Playlist</p>
        </div>
      )}
      {openNewModal && (
        <>
          <div className="flex flex-column">
            <label htmlFor="title">
              <div className="modal-items">Title</div>
              <input
                type="text"
                placeholder="Playlist title"
                className="modal-items m-xs p-xs"
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
          </div>
          <div
            onClick={() => {
              setOpenNewModal(() => !openNewModal);
              setOpenModal(() => !openModal);
              addPlaylistToastFunction();
              playlistDispatch({
                type: CREATE_PLAYLIST,
                payload: { title: input, video: video },
              });
            }}
            className="modal-action"
          >
            Create
          </div>
        </>
      )}
    </>
  );
};
