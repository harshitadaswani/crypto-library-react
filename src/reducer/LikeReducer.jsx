export const initialLiked = {
  liked: [],
};

export const ADD_TO_LIKE = "ADD_TO_LIKE";
export const REMOVE_FROM_LIKE = "REMOVE_FROM_LIKE";

export const LikeReducer = (state, action) => {
  const { type, payload } = action;
  const isVideoLiked = (state, video) =>
    state.liked.find((item) => item.id === video.id);

  switch (type) {
    case ADD_TO_LIKE:
      return isVideoLiked(state, payload)
        ? state
        : { ...state, liked: [...state.liked, payload] };

    case REMOVE_FROM_LIKE:
      return {
        ...state,
        liked: state.liked.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};
