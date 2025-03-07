import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Header/>
    <App />
    <Footer/>
  </BrowserRouter>
);
