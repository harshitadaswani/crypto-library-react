import React from "react";
import { History, Home, Videos, Watchlist, Login, Signup, PlaylistListing } from "../pages";
import { Routes, Route } from "react-router-dom";

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
                <Route
                    path="*"
                    element={
                        <main className="App">
                            <p>Error 404! Page not found.</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    );
}

export default AppRouter;
