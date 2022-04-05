import "./App.css";
import React from "react";
import AppRouter from "./routes/AppRouter";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
