import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";
import { LikeProvider } from "./context/LikeContext";
import { WatchProvider } from "./context/WatchLaterContext";
import { HistoryProvider } from "./context/HistoryContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <LikeProvider>
          <WatchProvider>
            <HistoryProvider>
              <App />
            </HistoryProvider>
          </WatchProvider>
        </LikeProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
