import { Route } from "react-router";
import { About, Categories, Collections, Contact, Home } from "./index";
import "./index.css";
import { Routes } from "react-router";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterFrom";
import Profile from "./components/Profile";
import LokaCollection from "./components/CategoryCollection/CollectionSections/LokaCollection";
import HasliCollection from "./components/CategoryCollection/CollectionSections/HasliCollection";
import NakshatraCollection from "./components/CategoryCollection/CollectionSections/NakshatraCollection";
import IryaCollection from "./components/CategoryCollection/CollectionSections/IryaCollection";
import NecklaceCategory from "./components/CategoryCollection/CategorySections/NecklaceCategory";
import BanglesCategory from "./components/CategoryCollection/CategorySections/BanglesCategory";
import ChokerCategory from "./components/CategoryCollection/CategorySections/ChokerCategory";
import EarringCategory from "./components/CategoryCollection/CategorySections/EarringCategory";
import Cart from "./components/Cart";

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
        <Route path="/lokacollection" element={<LokaCollection/>} />
        <Route path="/haslicollection" element={<HasliCollection/>} />
        <Route path="/nakshatracollection" element={<NakshatraCollection/>}/>
        <Route path="/iryacollection" element={<IryaCollection/>} />
        <Route path="/necklacecollection" element={<NecklaceCategory/>}/>
        <Route path="/banglecollection" element={<BanglesCategory/>}/>
        <Route path="/chokerscollection" element={<ChokerCategory/>} />
        <Route path="/earringcollection" element={<EarringCategory/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
  );
}

export default Layout;