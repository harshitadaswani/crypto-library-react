import { v4 } from "uuid";

export const initialPlaylistValue = [
  {
    id: v4(),
    name: "Playlist 1",
    videos: [],
  },
  {
    id: v4(),
    name: "Playlist 2",
    videos: [],
  },
  {
    id: v4(),
    name: "Playlist 3",
    videos: [],
  },
];

export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";

export const isVideoInPlaylist = (state, videoId, playlistId) =>
  state.some((playlist) =>
    playlist.id === playlistId
      ? playlist.videos.some((video) => video._id === videoId)
      : false
  );

export const PlaylistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_PLAYLIST:
      return state.map((playlist) =>
        payload.playlistId === playlist.id
          ? { ...playlist, videos: [...playlist.videos, payload.video] }
          : playlist
      );

    case REMOVE_FROM_PLAYLIST:
      return state.map((playlist) =>
        payload.playlistId === playlist.id
          ? {
              ...playlist,
              videos: playlist.videos.filter(
                (item) => item._id !== payload.videoId
              ),
            }
          : playlist
      );
  }
};
