import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { BrandLogo } from "../image";
function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow bg-white sticky top-0 z-10 ">
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo (Always visible on mobile and desktop) */}
          <Link to="/" aria-label="Go to homepage">
            <img className="w-50" src={BrandLogo} alt="Logo" />
          </Link>

          {/* Desktop Navigation Links */}
          <NavLink
            className="text-xl items-center border rounded  hidden md:flex" // Hide on mobile, show on medium and larger screens
            to="#"
            aria-label="Search"
          >
            <input
              type="text"
              className="p-3  rounded-l focus:outline-none w-64" // Increased padding and width
              placeholder="Hasli, Necklace"
            />
            <FaSearch className=" mx-2 text-3xl" /> {/* Increased icon size */}
          </NavLink>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex items-center p-5 space-x-6 text-lg">
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

            {/* Search Icon visible only on Desktop with hover effect */}

            {/* Cart and Login Icons on Desktop */}
            <div className="flex items-center space-x-5">
              <NavLink
                className="text-2xl text-gray-600"
                to="/cart"
                aria-label="Shopping cart"
              >
                <FaShoppingCart />
              </NavLink>
              <NavLink
                className="text-2xl text-gray-600"
                to="/profile"
                aria-label="User profile"
              >
                <FaRegUserCircle />
              </NavLink>
            </div>
          </div>

          {/* Mobile Screen: Show Cart, Login, and Menu Button */}
          <div className="md:hidden flex items-center space-x-5">
            <NavLink
              className="text-2xl text-gray-600"
              to="/cart"
              aria-label="Shopping cart"
            >
              <FaShoppingCart />
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
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Display Links when Menu Icon is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink className="text-lg" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/news">
                New
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
