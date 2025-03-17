import React from "react";
import { IoIosStar } from "react-icons/io";
import PropTypes from "prop-types";

function ItemCollection({ items , tittleName}) {
  const handleImageError = (e) => {
    e.target.src = "path/to/fallback-image.jpg"; // Fallback image path
  };

  const options = [
    "Best Selling",
    "Price, Low to High",
    "Price, High to Low",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
  ];

  return (
    <div className="p-4">
      <div id="navs" className="my-4">
        <div id="navFirst">
          <h1 className="text-center font-bold text-3xl mb-4">
            {tittleName}
          </h1>
        </div>
        <div id="navSecond" className="flex justify-between">
          <h1 className="text-center bg-blue-200">
            <span className="font-bold bg-sky-300 p-1 rounded">
              Products : {items.length}
            </span>
          </h1>
          <span>
            <select className="font-bold bg-sky-300 p-1 rounded" name="filter" id="filter">
              {
                options.map((option, index) => (
                  <option key={index} className="bg-white">{option}</option>
                ))
              }
            </select>
          </span>
        </div>
      </div>

      <div id="productCards" className="grid place-content-center p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={item.id || `item-${index}`} className="relative flex flex-col justify-center items-center rounded-xl bg-white p-4 group transition-transform transform hover:scale-105">
              {/* Image Section */}
              <div className="relative group-hover:blur-sm group-hover:opacity-50">
                <img
                  className="object-cover p-2 rounded-2xl max-h-72 w-auto"
                  src={item.image}
                  alt={`Necklace ${item.name}`}
                  onError={handleImageError}
                />
              </div>
              
              {/* Necklace Name */}
              <p className="text-xl font-bold mt-2">{item.name}</p>

              {/* Price */}
              <p className="text-lg font-semibold text-gray-600">
                Price: {item.price > 0 ? `₹${item.price}` : "Price on Request"}
              </p>

              {/* Rating Section */}
              <div className="flex items-center mt-2">
                <IoIosStar className="text-yellow-300" />
                <span className="ml-2">{item.rating}</span> {/* Display rating value */}
              </div>

              {/* Availability Section */}
              <div className="text-sm text-gray-500 mt-1">{item.availability}</div>

              {/* Description */}
              <p className="text-sm text-gray-700 mt-2">{item.description}</p>

              {/* "Add to Cart" Button */}
              <div className="absolute mt-8 inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 sm:opacity-100 sm:group-hover:opacity-100">
                <button
                  key={`add-to-cart-${item.id || index}`} // Unique key for each button
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none"
                  aria-label={`Add ${item.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ItemCollection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      availability: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ItemCollection;
