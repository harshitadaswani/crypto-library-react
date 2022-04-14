import React from "react";
import { WatchlistCard } from "../components";

export const Watchlist = () => {
  return (
    <>
      <h2 className="h1-title">Watch Later:</h2>
      <div className="flex flex-row flex-gap p-xs m-xs">
        <WatchlistCard />
      </div>
    </>
  );
};
