import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import {brandLogo} from "../index";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Toggle search input visibility on click
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <header className="shadow bg-white">
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo (Always visible on mobile and desktop) */}
          <Link to="/" aria-label="Go to homepage">
            <img className="w-50" src={brandLogo} alt="Logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center p-5 space-x-6 text-lg">
              <li><NavLink className={({isActive}) => isActive ? 'text-red-500 hover:underline' : ''} to="/">Home</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'text-red-500 hover:underline' : ''} to="/about">About</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'text-red-500 hover:underline' : ''} to="/contact">Contact</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'text-red-500 hover:underline' : ''} to="/collection">Collection</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'text-red-500 hover:underline' : ''} to="/newarrival">New Arrival</NavLink></li>
            </ul>

            {/* Search Icon visible only on Desktop with hover effect */}
            <NavLink
              className="text-xl text-gray-600 hidden md:block relative transition-all duration-200 ease-in-out hover:text-blue-500"
              to="#"
              aria-label="Search"
              onClick={toggleSearch}
            >
              <FaSearch />
              {/* Search Input (Visible when search icon clicked) */}
              <input
                className={`absolute top-0 left-0 p-3 w-64 rounded-2xl mt-10 transition-all duration-300 ease-in-out transform ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                type="text"
                placeholder="Search products"
              />
            </NavLink>

            {/* Cart and Login Icons on Desktop */}
            <div className="flex items-center space-x-5">
              <NavLink className="text-2xl text-gray-600" to="/cart" aria-label="Shopping cart">
                <FaShoppingCart />
              </NavLink>
              <NavLink className="text-2xl text-gray-600" to="/profile" aria-label="User profile">
                <FaRegUserCircle />
              </NavLink>
            </div>
          </div>

          {/* Mobile Screen: Show Cart, Login, and Menu Button */}
          <div className="md:hidden flex items-center space-x-5">
            <NavLink className="text-2xl text-gray-600" to="/cart" aria-label="Shopping cart">
              <FaShoppingCart />
            </NavLink>
            <NavLink className="text-2xl text-gray-600" to="/profile" aria-label="User profile">
              <FaRegUserCircle />
            </NavLink>

            {/* Hamburger Menu Icon */}
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-2xl text-gray-600">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Display Links when Menu Icon is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <ul className="flex flex-col space-y-4">
            <li><NavLink className="text-lg" to="/">Home</NavLink></li>
            <li><NavLink className="text-lg" to="/">About</NavLink></li>
            <li><NavLink className="text-lg" to="/">Contact</NavLink></li>
            <li><NavLink className="text-lg" to="/news">New</NavLink></li>
            <li><NavLink className="text-lg" to="/shop">Shop</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
