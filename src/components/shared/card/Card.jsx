import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { useVideos } from "../../../context/VideoContext";

export const Card = () => {
  const { videos, loader } = useVideos();

  return (
    <div className="card-container">
      {loader && <div> Loading the products </div>}
      {videos.map((video) => {
        const { _id, title, videoImage, views, videoCreated } = video;
        return (
          <div className="card-basic-btns card-img" key={_id}>
            <img className="img-basic-btns" src={videoImage} alt={title} />
            <h3 className="title-basic-btns m-xs">{title}</h3>
            <p className="subtitle-basic-btns m-xs">
              {views}K Views | {videoCreated} hours ago
            </p>
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
