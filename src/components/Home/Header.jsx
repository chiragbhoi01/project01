import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import BrandLogo from "../../assets/image/Miss-Gypsy-Logo.png";
import { CartContext } from "../../Context/CartContext";

function Header() {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCollectionHover, setIsCollectionHover] = useState(false); // Hover state for Collections
  const [isCategoryHover, setIsCategoryHover] = useState(false); // Hover state for Categories
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown for profile

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu when clicking a link
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setDropdownOpen(false);
        setIsCollectionHover(false);
        setIsCategoryHover(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow bg-white sticky top-0 z-20">
      <nav className="px-4 py-2">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo */}
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

              {/* Collections Dropdown */}
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
                {isCollectionHover && (
                  <div className="absolute right-0 mt-0 flex flex-col w-max space-y-4 bg-white shadow-md rounded-md p-4">
                    {CollectionLinks.map((collection, index) => (
                      <NavLink
                        key={index}
                        to={collection.route}
                        className="hover:bg-gray-200 transition rounded-2xl"
                      >
                        <h4 className="font-bold text-center">{collection.name}</h4>
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>

              {/* Categories Dropdown */}
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
                {isCategoryHover && (
                  <div className="absolute right-0 mt-0 flex flex-col w-max space-y-4 bg-white shadow-md rounded-md p-4">
                    {CategoriesLinks.map((category, index) => (
                      <NavLink
                        key={index}
                        to={category.route}
                        className="hover:bg-gray-200 transition rounded-2xl"
                      >
                        <h4 className="font-bold text-center">{category.name}</h4>
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>

              {/* Other Links */}
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
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
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

          {/* Mobile View */}
          <div className="md:hidden flex items-center space-x-4">
            <NavLink
              className="relative flex items-center text-2xl text-gray-600"
              to="/cart"
              aria-label="Shopping cart"
            >
              <FaShoppingCart />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
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

            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-2xl text-gray-600"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
