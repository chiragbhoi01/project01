import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterForm from "./components/Login_Register/RegisterFrom";
import Login from "./components/Login_Register/LoginForm";

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Header/>
  <App/>
  <Footer/>
  </BrowserRouter>
 
);
