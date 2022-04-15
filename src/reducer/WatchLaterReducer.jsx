export const initialWatchList = {
  watchLater: [],
};

export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

export const WatchReducer = (state, action) => {
  const { type, payload } = action;
  const isVideoInWatchlist = (state, video) =>
    state.watchLater.find((item) => item.id === video.id);

  switch (type) {
    case ADD_TO_WATCHLIST:
      return isVideoInWatchlist(state, payload)
        ? state
        : { ...state, watchLater: [...state.watchLater, payload] };

    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchLater: state.watchLater.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
