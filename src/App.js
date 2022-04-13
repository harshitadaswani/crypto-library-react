import "./App.css";
import React from "react";
import AppRouter from "./routes/AppRouter";
import { Navbar, Footer, Sidebar } from "./components";

function App() {
  return (
    <div className="p-s container">
      <Navbar />
      <Sidebar />
      <main className="p-none m-none">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
