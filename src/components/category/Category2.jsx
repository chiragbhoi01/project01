import React from "react";
import {
  OurExclusiveCollections1,
  OurExclusiveCollections2,
  OurExclusiveCollections3,
  OurExclusiveCollections4,
} from "../../image";

const Category2Image = [
  {
    image: OurExclusiveCollections1,
    title: "Mangalsutra",
  },
  {
    image: OurExclusiveCollections2,
    title: "Nakshatra",
  },
  {
    image: OurExclusiveCollections3,
    title: "IRYA",
  },
  {
    image: OurExclusiveCollections4,
    title: "Hasli",
  },
];

function Category2() {
  return (
    <div className="container flex-col h-auto w-full p-4">
      <div className="text-3xl font-medium text-center mb-4">
        <h1 className="font-semibold">Our Exclusive Collection</h1>
      </div>
      <div id="img" className="flex justify-center flex-wrap">
        {Category2Image.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/5 m-2 p-2 rounded-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 shadow-xl"
          >
            <img
              className="object-cover h-80 w-full rounded-lg" // Adjusted height and width for better responsiveness
              src={item.image}
              alt={item.title}
            />
            <div className="text-center bg-[#B5B4D9] rounded-l-3xl p-2 text-lg mt-2 font-semibold">Collection of {item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category2;