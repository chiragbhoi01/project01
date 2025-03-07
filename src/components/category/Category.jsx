import React from "react";
import { Link, Links } from "react-router-dom"; // Import Link component from react-router-dom
import { collection, collection1, collection2 } from "../.."; // Adjust the import path as necessary

export default function Category() {
  const collections = [
    {
      id: 1,
      image: collection, // Replace with actual image paths
      title: "Mangal Sutra 1",
      price: 500,
    },
    {
      id: 2,
      image: collection1,
      title: "Mangal Sutra 2",
      price: 700,
    },
    {
      id: 3,
      image: collection2,
      title: "Mangal Sutra 3",
      price: 800,
    },
  ];

  return (
    <div className="h-auto flex flex-col p-5">
      <h1 className="text-3xl font-semibold mb-5 text-center">Our Collections</h1>

      <div className="flex flex-wrap justify-center space-x-6">
        {/* Map over collections to create category items */}
        {collections.map((item) => (
          <Link>
          <div
            key={item.id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 mb-6"
          >
            <img
              className="object-cover h-80 w-full rounded-lg"
              src={item.image} // Make sure item.image points to the correct image path
              alt={item.title}
            />
            <div className="mt-4">
              <b className="text-xl">{item.title}</b>
              <br />
              <span className="text-gray-700">
                <b>Price:</b> {item.price}
              </span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
