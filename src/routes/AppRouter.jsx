import React from "react";
import { History, Home, Videos, Watchlist, Login, Signup, PlaylistListing, Liked, Player } from "../pages";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";

function AppRouter() {
    return (
        <div className="AppRouter">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/history" element={<History />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/playlist-listing" element={<PlaylistListing />} />
                <Route path="/liked" element={<Liked />} />
                <Route path="/player" element={<Player />} />
                <Route
                    path="*"
                    element={<ErrorPage />}
                />
            </Routes>
        </div>
    );
}

export default AppRouter;
