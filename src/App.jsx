import { Route } from "react-router";
import { About, Categories, Collections, Contact, Home } from "./index";
import "./index.css";
import { Routes } from "react-router";
import { BrowserRouter } from "react-router";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/collection" element={<Collections />} />

      </Routes>
      
  );
}

export default App;
