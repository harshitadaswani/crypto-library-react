import React from "react";
import { createContext, useContext, useReducer } from "react";
import { initialHistory, HistoryReducer } from "../reducer/HistoryReducer";

const defaultHistoryValue = {};

const HistoryContext = createContext(defaultHistoryValue);

export const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(
    HistoryReducer,
    initialHistory
  );

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => useContext(HistoryContext);
