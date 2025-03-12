import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

// Ensure that HomeShopByCategoryData is correctly imported, and it should not come from the public directory
export default function HomeCategory({tittle ,imagesObject}) {
  return (
    <div className="h-auto flex flex-col p-5">
      <h1 className="text-3xl font-semibold mb-5 text-center">
        {tittle}
      </h1>

      <div className="flex flex-wrap justify-center space-x-6">
        {/* Map over collections to create category items */}
        {imagesObject.map((item) => (
          <Link to={`/category/${item.id}`} key={item.id}> {/* Dynamic route based on item.id */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 mb-6 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
              <img
                className="object-cover h-70 w-full rounded-lg"
                src={item.image} // Ensure item.image points to the correct image path
                alt={item.name} // Use name for better accessibility
              />
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
