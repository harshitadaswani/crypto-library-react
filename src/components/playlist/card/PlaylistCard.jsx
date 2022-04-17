import React from "react";
import { ImBin } from "react-icons/im";
import { useVideos } from "../../../context/VideoContext";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { removePlaylistToastFunction } from "../../../utils/ToastUtils";
import { usePlaylist } from "../../../context/PlaylistContext";
import { REMOVE_FROM_PLAYLIST } from "../../../reducer/PlaylistReducer";

export const PlaylistCard = () => {
  const { loader } = useVideos();
  const { playlistState, playlistDispatch } = usePlaylist();

  return (
    <>
      <Toaster position="top-right" />

      {loader && <div> Loading the products </div>}
      {playlistState.length &&
        playlistState.map((playlist) => {
          const { id, name, videos } = playlist;
          return (
            <>
              <h2 className="p-m m-m" key={id}>
                {name}
              </h2>
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
            </>
          );
        })}
    </>
  );
};
