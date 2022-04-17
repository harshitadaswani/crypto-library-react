import React from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../../context/PlaylistContext";
import {
  ADD_TO_PLAYLIST,
  isVideoInPlaylist,
  REMOVE_FROM_PLAYLIST,
} from "../../../reducer/PlaylistReducer";
import "./modal.css";
import {
  addPlaylistToastFunction,
  removePlaylistToastFunction,
} from "../../../utils/ToastUtils";

export const PlaylistModal = ({ video }) => {
  const { openModal, setOpenModal, playlistState, playlistDispatch } =
    usePlaylist();

  const playlistHandler = (e, playlistId) => {
    if (e.target.checked) {
      playlistDispatch({
        type: ADD_TO_PLAYLIST,
        payload: { playlistId, video },
      });
      addPlaylistToastFunction();
    } else {
      playlistDispatch({
        type: REMOVE_FROM_PLAYLIST,
        payload: { playlistId, videoId: video._id },
      });
      removePlaylistToastFunction();
    }
  };

  return (
    <>
      {openModal && (
        <div className="modal-wrapper" onClick={() => setOpenModal(false)}>
          <div
            className="modal-alert p-xs m-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="modal-title border-bottom p-xs m-xs">
              Add to Playlist
            </h3>
            <form action="">
              <div className="modal-action-items stacked p-xs m-xs">
                {playlistState.map((item) => {
                  return (
                    <>
                      <div className="modal-items" key={item.id}>
                        <label>
                          <input
                            type="checkbox"
                            name="items"
                            onChange={(e) => playlistHandler(e, item.id)}
                            checked={isVideoInPlaylist(
                              playlistState,
                              video._id,
                              item.id
                            )}
                          />{" "}
                          {item.name}
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
            </form>
            <div className="modal-actions border-top p-xs m-xs">
              <div
                className="modal-action txt-cursor"
                onClick={() => setOpenModal(false)}
              >
                Close
              </div>
              <Link
                to="/playlist-listing"
                className="modal-action"
                onClick={() => setOpenModal(false)}
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
