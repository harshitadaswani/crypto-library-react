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
