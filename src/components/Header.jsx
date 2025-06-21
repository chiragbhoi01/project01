import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import BrandLogo from "../assets/image/Miss-Gypsy-Logo.png";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const CollectionLinks = [
    { name: "Hasli Collection", route: "/haslicollection" },
    { name: "Loka Collection", route: "/lokacollection" },
    { name: "Irya Collection", route: "/iryacollection" },
    { name: "Nakshatra Collection", route: "/nakshatracollection" },
  ];
  const CategoriesLinks = [
    { name: "Necklace Collection", route: "/necklacecollection" },
    { name: "Bangle Collection", route: "/banglecollection" },
    { name: "Earring Collection", route: "/earringcollection" },
    { name: "Chokers Collection", route: "/chokerscollection" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) setActiveDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="shadow bg-white sticky top-0 z-20">
      <nav className="px-4 py-2 max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Go to homepage">
          <img className="w-32 md:w-40" src={BrandLogo} alt="Logo" />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center space-x-3">
          <input
            type="text"
            className="p-2 rounded-l-md focus:outline-none w-64 max-w-full"
            placeholder="Hasli, Necklace"
          />
          <FaSearch className="text-2xl text-gray-600" />
        </div>

        {/* Navigation Links */}
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
            {/* Dropdown: Collections */}
            <li
              className="relative dropdown"
              onMouseEnter={() => setActiveDropdown("collections")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={activeDropdown === "collections"}
                className="focus:outline-none"
              >
                Collections
              </button>
              {activeDropdown === "collections" && (
                <div className="absolute right-0 mt-0 flex flex-col w-max space-y-4 bg-white shadow-md rounded-md p-4">
                  {CollectionLinks.map((collection) => (
                    <NavLink
                      key={collection.name}
                      to={collection.route}
                      className="hover:bg-gray-200 transition rounded-2xl"
                    >
                      {collection.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
            {/* Dropdown: Categories */}
            <li
              className="relative dropdown"
              onMouseEnter={() => setActiveDropdown("categories")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={activeDropdown === "categories"}
                className="focus:outline-none"
              >
                Categories
              </button>
              {activeDropdown === "categories" && (
                <div className="absolute right-0 mt-0 flex flex-col w-max space-y-4 bg-white shadow-md rounded-md p-4">
                  {CategoriesLinks.map((category) => (
                    <NavLink
                      key={category.name}
                      to={category.route}
                      className="hover:bg-gray-200 transition rounded-2xl"
                    >
                      {category.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-5">
            <NavLink className="relative text-2xl text-gray-600" to="/cart">
              <FaShoppingCart />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </div>
              )}
            </NavLink>

            <div className="relative dropdown">
              <button
                aria-haspopup="true"
                aria-expanded={activeDropdown === "profile"}
                onClick={() => toggleDropdown("profile")}
                className="text-2xl text-gray-600 focus:outline-none cursor-pointer"
              >
                <FaRegUserCircle />
              </button>
              {activeDropdown === "profile" && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-2xl text-gray-600"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" onClick={closeMenu}>
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" onClick={closeMenu}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
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
