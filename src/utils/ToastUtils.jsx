import toast from "react-hot-toast";

export const addLikeToastFunction = () =>
  toast.success("Succesfully Added to Liked Videos!");

export const addWatchToastFunction = () =>
  toast.success("Succesfully Added to Watch Later Videos!");

export const removeLikeToastFunction = () =>
  toast.success("Succesfully Removed from Liked Videos!");

export const removeWatchToastFunction = () =>
  toast.success("Succesfully Removed from Watch Later Videos!");

export const removeHistoryToastFunction = () =>
  toast.success("Succesfully Removed from History Videos!");

export const removePlaylistToastFunction = () =>
  toast.success("Succesfully Removed from Playlist Videos!");

export const addPlaylistToastFunction = () =>
  toast.success("Succesfully Added to Playlist Videos!");

export const emptyHistoryToastFunction = () =>
  toast.error("History Videos are empty! Go watch some videos");

export const emptyPlaylistToastFunction = () =>
  toast.error("Playlist is empty! Go add some videos");

export const DeletePlaylistToastFunction = () =>
  toast.success("Succesfully deleted the Playlist!");
