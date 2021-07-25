import React from "react";
import { AboutUs, Artists, Header } from "./components";
import "./App.css";

export default function App() {
  return (
    <div className="body">
      <Header />
      <Artists />
      <AboutUs />
    </div>
  );
}
