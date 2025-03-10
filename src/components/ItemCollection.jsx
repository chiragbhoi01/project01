import React from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";


function ItemCollection(
    {
        items,
    options,
    }
) {
 

  // Sample data for necklaces with ratings


  return (
    <>
      <div className="p-4">
        <div id="firstNav" className="my-4">
          <h1 className="text-center font-bold text-3xl mb-4">
            Necklace Jewelry Collections
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center m-4">
            <span className="bg-blue-300 p-1 rounded shadow-md mb-4 md:mb-0">
              Products: {items.length}
            </span>

            <span className="w-full md:w-auto">
              <select
                name="item"
                id=""
                className="bg-blue-300 p-2 rounded shadow-md w-full md:w-48"
              >
                {options.map((option, index) => (
                  <option key={index} className="bg-white" value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
          </div>
        </div>
      </div>

      <div id="productCards" className="bg-blue-500 grid place-content-center p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              id="cards"
              className="relative flex flex-col justify-center items-center rounded-xl bg-white p-4 group"
            >
              <div className="relative group-hover:blur-sm group-hover:opacity-50">
                <img
                  className="object-cover p-2 rounded-2xl max-h-72 w-auto"
                  src={item.img}
                  alt={`Necklace ${index + 1}`}
                />
              </div>

              <p className="text-xl font-bold mt-2">{item.name}</p>
              <p className="text-lg font-semibold text-gray-600">Price: {item.price}</p>

              {/* Rating Section */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => {
                  if (i < items.rating) {
                    return <IoIosStar key={i} className="text-yellow-500" />;
                  } else if (i < items.rating + 1 && items.rating % 1 !== 0) {
                    return <IoIosStarHalf key={i} className="text-yellow-500" />;
                  } else {
                    return <IoIosStar key={i} className="text-gray-300" />;
                  }
                })}
              </div>

              {/* "Add to Cart" Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemCollection;
