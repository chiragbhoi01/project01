import { Link, NavLink } from "react-router-dom";
import {
  FaRegUserCircle,
  FaShoppingCart,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";
import { BrandLogo } from "../image";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(10);

  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu when clicking a link
  };

  return (
    <header className="shadow bg-white sticky top-0 z-20">
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo (Always visible on mobile and desktop) */}
          <Link to="/" aria-label="Go to homepage">
            <img className="w-32 md:w-40" src={BrandLogo} alt="Logo" />
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center space-x-3">
            <input
              type="text"
              className="p-2 rounded-l-md focus:outline-none w-64 max-w-full"
              placeholder="Hasli, Necklace"
            />
            <FaSearch className="text-2xl text-gray-600" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center space-x-6 text-lg">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/collection"
                >
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/categories"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Cart and Profile Icons on Desktop */}
            <div className="flex items-center space-x-5">
              <NavLink
                className="relative flex items-center text-2xl text-gray-600"
                to="/cart"
                aria-label="Shopping cart"
              >
                <FaShoppingCart />
                {itemCount > 0 && (
                  <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </div>
                )}
              </NavLink>

              <div className="relative group">
                <NavLink
                  className="flex items-center text-2xl text-gray-600"
                  to="/profile"
                  aria-label="User profile"
                >
                  <FaRegUserCircle />
                </NavLink>

                {/* Dropdown - It will show when hovering over the NavLink (with the 'group' class) */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <NavLink
                      to="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Screen: Show Cart, Login, and Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <NavLink
              className="relative flex items-center text-2xl text-gray-600"
              to="/cart"
              aria-label="Shopping cart"
            >
              <FaShoppingCart />
              {itemCount > 0 && (
                <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </div>
              )}
            </NavLink>

            <NavLink
              className="text-2xl text-gray-600"
              to="/profile"
              aria-label="User profile"
            >
              <FaRegUserCircle />
            </NavLink>

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-2xl text-gray-600"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Display Links when Menu Icon is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink className="text-lg" to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/collection" onClick={closeMenu}>
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/categories" onClick={closeMenu}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/about" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
