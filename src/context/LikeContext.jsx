import React from "react";
import { useReducer, createContext, useContext } from "react";
import { initialLiked, LikeReducer } from "../reducer/LikeReducer";

const defaultLikeValue = {};

const LikeContext = createContext(defaultLikeValue);

export const LikeProvider = ({ children }) => {
  const [likedState, likedDispatch] = useReducer(LikeReducer, initialLiked);

  return (
    <LikeContext.Provider value={{ likedState, likedDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => useContext(LikeContext);
