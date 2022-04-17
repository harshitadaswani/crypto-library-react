import React from "react";
import { HistoryCard } from "../components";

export const History = () => {
  return (
    <>
      <h2 className="h1-title">History:</h2>
      <div className="flex flex-row flex-gap p-xs m-xs">
        <HistoryCard />
      </div>
    </>
  );
};
