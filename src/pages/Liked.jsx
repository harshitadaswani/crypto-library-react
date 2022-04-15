import React from "react";
import { LikedCard } from "../components";

export const Liked = () => {
  return (
    <>
      <h2 className="h1-title">Liked:</h2>
      <div className="flex flex-row flex-gap p-xs m-xs">
        <LikedCard />
      </div>
    </>
  );
};
