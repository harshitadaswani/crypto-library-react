export const initialHistory = {
  history: [],
};

export const ADD_TO_HISTORY = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_HISTORY = "REMOVE_FROM_WATCHLIST";
export const REMOVE_ALL = "REMOVE_ALL";

export const HistoryReducer = (state, action) => {
  const { type, payload } = action;
  const isVideoInHistory = (state, video) =>
    state.history.find((item) => item.id === video.id);

  switch (type) {
    case ADD_TO_HISTORY:
      return isVideoInHistory(state, payload)
        ? state
        : { ...state, history: [...state.history, payload] };

    case REMOVE_FROM_HISTORY:
      return {
        ...state,
        history: state.history.filter((item) => item.id !== payload.id),
      };
    case REMOVE_ALL:
      return state ? { history: [] } : state;

    default:
      return state;
  }
};
