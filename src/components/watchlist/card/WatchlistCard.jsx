import React from "react";
import { MdWatchLater } from "react-icons/md";
import { useVideos } from "../../../context/VideoContext";
import { Link } from "react-router-dom";

export const WatchlistCard = () => {
  const { videos, loader } = useVideos();
  return (
    <div className="card-container">
      {loader && <div> Loading the products </div>}
      {videos.map((video) => {
        const { _id, title, videoImage, creator } = video;
        return (
          <div className="card-basic-btns card-img" key={_id}>
            <img className="img-basic-btns" src={videoImage} alt={title} />
            <MdWatchLater
              size={35}
              className="wishlist-btn br-full"
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
      })}
    </div>
  );
};
