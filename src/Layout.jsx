import { Route } from "react-router";
import { About, Categories, Collections, Contact, Home } from "./index";
import "./index.css";
import { Routes } from "react-router";
import LoginForm from "./components/Login_Register/LoginForm";
import RegisterForm from "./components/Login_Register/RegisterFrom";
import Profile from "./components/Profile";

function Layout
() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/collection" element={<Collections/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/profile" element={<Profile/>} />

      </Routes>
      
  );
}

export default Layout;