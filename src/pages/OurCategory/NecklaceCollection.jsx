import React from "react";
import {
  BannerNecklace,
  Necklaces1,
  Necklaces2,
  Necklaces3,
  Necklaces4,
  Necklaces5,
  Necklaces6,
  Necklaces7,
  Necklaces8,
  Necklaces9,
} from "../../image"; // Ensure this path is correct
import Silders from "../../components/Silders"; // Importing the Silders component
import ItemCollection from "../../components/ItemCollection";
const options = [
  "Best Selling",
  "Price, Low to High",
  "Price, High to Low",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
];

function NecklaceCollection() {
  // Array of necklace images
  const NecklaceItem = [
    { img: Necklaces1, name: "Necklace 1", price: "₹500", rating: 5 },
    { img: Necklaces2, name: "Necklace 2", price: "₹600", rating: 4 },
    { img: Necklaces3, name: "Necklace 3", price: "₹700", rating: 3 },
    { img: Necklaces4, name: "Necklace 4", price: "₹450", rating: 2 },
    { img: Necklaces5, name: "Necklace 5", price: "₹550", rating: 4 },
    { img: Necklaces6, name: "Necklace 6", price: "₹650", rating: 5 },
    { img: Necklaces7, name: "Necklace 7", price: "₹600", rating: 1 },
    { img: Necklaces8, name: "Necklace 8", price: "₹750", rating: 3 },
  ];

  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerNecklace}
        images={NecklaceItem}
        BannerTittle={'Necklaces'}
      />
      <ItemCollection
        items={NecklaceItem}
        options={options}
      />
    </div>
    
  );
}

export default NecklaceCollection;
