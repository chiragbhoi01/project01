import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom"; // Corrected the import for BrowserRouter
import { Footer, Header } from "../src/index";
import { CartProvider } from "./Context/CartContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
      <Header />
        <Layout />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
