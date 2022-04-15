import React from "react";
import { MdWatchLater } from "react-icons/md";
import { useVideos } from "../../../context/VideoContext";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../../context/WatchLaterContext";
import { REMOVE_FROM_WATCHLIST } from "../../../reducer/WatchLaterReducer";

export const WatchlistCard = () => {
  const { loader } = useVideos();
  const { watchState, watchDispatch } = useWatchLater();

  return (
    <div className="card-container">
      {loader && <div> Loading the products </div>}
      {watchState.watchLater.length !== 0 ? (
        watchState.watchLater.map((video) => {
          const { _id, title, videoImage, creator } = video;
          return (
            <div className="card-basic-btns card-img" key={_id}>
              <img className="img-basic-btns" src={videoImage} alt={title} />
              <MdWatchLater
                size={35}
                className="wishlist-btn color-red br-full txt-cursor"
                onClick={() =>
                  watchDispatch({ type: REMOVE_FROM_WATCHLIST, payload: video })
                }
              ></MdWatchLater>
              <h3 className="title-basic-btns m-xs">{title}</h3>
              <h4 className="subtitle-basic-btns m-xs">{creator}</h4>
              <Link to={`/player/${_id}`}>
                <button className="bid-btn br-s p-s m-xs fw-semibold txt-s">
                  Watch Now
                </button>
              </Link>
            </div>
          );
        })
      ) : (
        <div> Add some videos to Watchlist from Explore Section</div>
      )}
    </div>
  );
};
