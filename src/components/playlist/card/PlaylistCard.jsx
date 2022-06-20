import React from "react";
import { ImBin } from "react-icons/im";
import { useVideos } from "../../../context/VideoContext";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  removePlaylistToastFunction,
  emptyPlaylistToastFunction,
} from "../../../utils/ToastUtils";
import { usePlaylist } from "../../../context/PlaylistContext";
import {
  REMOVE_FROM_PLAYLIST,
  DELETE_PLAYLIST,
} from "../../../reducer/PlaylistReducer";

export const PlaylistCard = () => {
  const { loader } = useVideos();
  const { playlistState, playlistDispatch } = usePlaylist();

  return (
    <>
      <Toaster position="top-right" />

      {loader && <div> Loading the products </div>}
      {playlistState.length !== 0 ? (
        playlistState.map((playlist) => {
          const { id, name, videos } = playlist;
          return (
            <div key={id}>
              <div className="p-xs m-xs flex flex-row flex-space-between">
                <h2 className="h1-title">{name}</h2>
                <ImBin
                  size={30}
                  className="br-full txt-cursor"
                  onClick={() => {
                    playlistState.length !== 0
                      ? removePlaylistToastFunction()
                      : emptyPlaylistToastFunction();
                    playlistDispatch({
                      type: DELETE_PLAYLIST,
                      payload: { playlistId: id },
                    });
                  }}
                />
              </div>
              <div>
                {videos.length !== 0 ? (
                  videos.map((video) => {
                    const { _id, title, videoImage, creator } = video;
                    return (
                      <>
                        <div
                          className="flex flex-row flex-gap p-xs m-xs"
                          key={_id}
                        >
                          <div className="card-basic-btns card-img">
                            <img
                              className="img-basic-btns"
                              src={videoImage}
                              alt={title}
                            />
                            <ImBin
                              size={35}
                              className="wishlist-btn br-full color-red txt-cursor"
                              onClick={() => {
                                playlistDispatch({
                                  type: REMOVE_FROM_PLAYLIST,
                                  payload: { playlistId: id, videoId: _id },
                                });
                                removePlaylistToastFunction();
                              }}
                            />
                            <h3 className="title-basic-btns m-xs">{title}</h3>
                            <h4 className="subtitle-basic-btns m-xs">
                              {creator}
                            </h4>
                            <Link to={`/player/${_id}`}>
                              <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                                Watch Now
                              </button>
                            </Link>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div>Add some videos to the playlists</div>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className="txt-l fw-bold">Create a playlist</div>
      )}
    </>
  );
};
