import React from "react";
import { Home } from "../pages";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
    return (
        <div className="AppRouter">
            <Routes>
                <Route path="/" element={<Home />} />
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
