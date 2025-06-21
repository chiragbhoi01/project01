import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom"; // Corrected the import for BrowserRouter
import { Footer, Header } from "../src/index";
import { CartProvider } from "./Context/CartContext";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
      <Header />
      {/* <App/> */}
        <Layout />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
