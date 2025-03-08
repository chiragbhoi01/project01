import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import {
  ShopbyCategories1,
  ShopbyCategories2,
  ShopbyCategories3,
  ShopbyCategories4,
} from "../../image"; // Ensure the path to your images is correct

export default function Category() {
  const collections = [
    {
      id: 1,
      image: ShopbyCategories1,
      title: "Explore The Necklace "
    },
    {
      id: 2,
      image: ShopbyCategories2,
      title: "Explore The Earrings "
    },
    {
      id: 3,
      image: ShopbyCategories3,
      title: "Explore The Bangles "
    },
    {
      id: 4,
      image: ShopbyCategories4,
      title: "Explore The Chokers", // Corrected title for the fourth item
    },
  ];

  return (
    <div className="h-auto flex flex-col p-5">
      <h1 className="text-3xl font-semibold mb-5 text-center">
        Shop by Categories
      </h1>

      <div className="flex flex-wrap justify-center space-x-6">
  {/* Map over collections to create category items */}
  {collections.map((item) => (
    <Link > {/* Added a dynamic route */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 mb-6 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl">
        <img
          className="object-cover h-70 w-full rounded-lg"
          src={item.image} // Ensure item.image points to the correct image path
          alt={item.title} // Use title for better accessibility
        />
        <div className="text-xl font-bold text-center bg-blue-500 text-white rounded p-1 mt-1">
          {item.title} 
        </div>
      </div>
    </Link>
  ))}
</div>
</div>  );
}