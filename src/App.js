import React from "react";
import { AboutUs, Artists, Header, Navbar } from "./components";
import "./App.css";

export default function App() {
  return (
    <div className="body">
      <Navbar />
      <Header />
      <Artists />
      <AboutUs />
    </div>
  );
}
