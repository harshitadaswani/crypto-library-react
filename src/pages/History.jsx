import React from "react";
import { HistoryCard } from "../components";
import { REMOVE_ALL } from "../reducer/HistoryReducer";
import { ImBin } from "react-icons/im";
import { useHistory } from "../context/HistoryContext";
import {
  emptyHistoryToastFunction,
  removeHistoryToastFunction,
} from "../utils/ToastUtils";

export const History = () => {
  const { historyState, historyDispatch } = useHistory();
  return (
    <>
      <div className="p-xs m-xs flex flex-row flex-space-between">
        <h2 className="h1-title">History:</h2>
        <ImBin
          size={30}
          className="br-full txt-cursor"
          onClick={() => {
            historyState.history.length !== 0
              ? removeHistoryToastFunction()
              : emptyHistoryToastFunction();
            historyDispatch({
              type: REMOVE_ALL,
            });
          }}
        />
      </div>
      <div className="flex flex-row flex-gap p-xs m-xs">
        <HistoryCard />
      </div>
    </>
  );
};
