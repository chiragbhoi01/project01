import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import BrandLogo from "../../assets/image/Miss-Gypsy-Logo.png";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(10); // Number of items in cart
  const [isCollectionHover, setIsCollectionHover] = useState(false); // Hover state for Collections
  const [isCategoryHover, setIsCategoryHover] = useState(false); // Hover state for Categories
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown for profile

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
              {/* Home link */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/"
                  onClick={() => setDropdownOpen(true)}
                >
                  Home
                </NavLink>
              </li>

              {/* Collections link */}
              <li
                className="relative"
                onMouseEnter={() => setIsCollectionHover(true)}
                onMouseLeave={() => setIsCollectionHover(false)}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/collection"
                >
                  Collections
                </NavLink>

                {/* Pop-up for Collections */}
                {isCollectionHover && (
                  <div className="absolute left-0 mt-2 flex space-x-4 bg-white shadow-md rounded-md">
                    <NavLink
                      to="/necklace-collection"
                      className="p-4 hover:bg-gray-200 transition"
                    >
                      <h4 className="font-bold text-center">
                        Necklace Collection
                      </h4>
                    </NavLink>
                    <NavLink
                      to="/banglescollection"
                      className="p-4 hover:bg-gray-200 transition"
                    >
                      <h4 className="font-bold text-center">
                        Bangles Collection
                      </h4>
                    </NavLink>
                  </div>
                )}
              </li>

              {/* Categories link */}
              <li
                className="relative"
                onMouseEnter={() => setIsCategoryHover(true)}
                onMouseLeave={() => setIsCategoryHover(false)}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 hover:underline" : ""
                  }
                  to="/categories"
                >
                  Categories
                </NavLink>

                {/* Pop-up for Categories */}
                {isCategoryHover && (
                  <div className="absolute left-0 mt-2 flex space-x-4 bg-white shadow-md rounded-md">
                    <NavLink
                      to="/category-1"
                      className="p-4 hover:bg-gray-200 transition"
                    >
                      <h4 className="font-bold text-center">Hasli</h4>
                    </NavLink>
                    <NavLink
                      to="/category-2"
                      className="p-4 hover:bg-gray-200 transition"
                    >
                      <h4 className="font-bold text-center">Loka</h4>
                    </NavLink>
                  </div>
                )}
              </li>

              {/* Other links */}
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
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  <FaRegUserCircle />
                </NavLink>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
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
