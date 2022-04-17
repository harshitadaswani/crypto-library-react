import React from "react";
import { createContext, useContext, useReducer } from "react";
import { initialWatchList, WatchReducer } from "../reducer/WatchLaterReducer";

const defaultWatchValue = {};

const WatchContext = createContext(defaultWatchValue);

export const WatchProvider = ({ children }) => {
  const [watchState, watchDispatch] = useReducer(
    WatchReducer,
    initialWatchList
  );

  return (
    <WatchContext.Provider value={{ watchState, watchDispatch }}>
      {children}
    </WatchContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchContext);
