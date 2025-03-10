import React, { useState } from "react";
import Subcategory from "./Subcategory";

function Ebay() {
  const [hoveredCategory, setHoveredCategory] = useState(null); // State for hover
  const [clickedCategory, setClickedCategory] = useState(null); // State for click

  const CategoryTitle = [
    {
      navTitle: "Electronics",
      id: "electronics", // Added ID for matching purposes
      subCategoryOneName: 'Most popular categories',
      subCategoryTwoName: 'Most categories',
      subCategories1: [
        { subName: "Smartphones and accessories", id: crypto.randomUUID() },
        { subName: "Computers and tablets", id: crypto.randomUUID() },
        { subName: "Cameras and photos", id: crypto.randomUUID() },
        { subName: "Camera drones", id: crypto.randomUUID() },
        { subName: "Refurbished", id: crypto.randomUUID() },
        { subName: "Smart home", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Laptops and accessories", id: crypto.randomUUID() },
        { subName: "Wearable tech", id: crypto.randomUUID() },
        { subName: "Gaming consoles", id: crypto.randomUUID() },
        { subName: "Headphones and earphones", id: crypto.randomUUID() },
        { subName: "TVs and Home Entertainment", id: crypto.randomUUID() },
        { subName: "Speakers and sound systems", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Motors",
      id: "motors",
      subCategoryOneName: 'Vehicle types',
      subCategoryTwoName: 'Parts and Accessories',
      subCategories1: [
        { subName: "Cars", id: crypto.randomUUID() },
        { subName: "Motorcycles", id: crypto.randomUUID() },
        { subName: "Trucks", id: crypto.randomUUID() },
        { subName: "Boat motors", id: crypto.randomUUID() },
        { subName: "Electric vehicles", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Car parts and accessories", id: crypto.randomUUID() },
        { subName: "Motorcycle helmets", id: crypto.randomUUID() },
        { subName: "Truck tires", id: crypto.randomUUID() },
        { subName: "Vehicle insurance", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Fashion",
      id: "fashion",
      subCategoryOneName: 'Clothing and accessories',
      subCategoryTwoName: 'Shoes, Bags, and more',
      subCategories1: [
        { subName: "Men's clothing", id: crypto.randomUUID() },
        { subName: "Women's clothing", id: crypto.randomUUID() },
        { subName: "Jewelry", id: crypto.randomUUID() },
        { subName: "Watches", id: crypto.randomUUID() },
        { subName: "Bags and accessories", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "T-shirts", id: crypto.randomUUID() },
        { subName: "Dresses", id: crypto.randomUUID() },
        { subName: "Boots", id: crypto.randomUUID() },
        { subName: "Sunglasses", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Collectibles and Art",
      id: "collectibles-art",
      subCategoryOneName: 'Artworks',
      subCategoryTwoName: 'Collectibles',
      subCategories1: [
        { subName: "Paintings", id: crypto.randomUUID() },
        { subName: "Sculptures", id: crypto.randomUUID() },
        { subName: "Vintage Art", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Stamps", id: crypto.randomUUID() },
        { subName: "Coins", id: crypto.randomUUID() },
        { subName: "Action figures", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Sports",
      id: "sports",
      subCategoryOneName: 'Sports equipment',
      subCategoryTwoName: 'Sportswear',
      subCategories1: [
        { subName: "Football", id: crypto.randomUUID() },
        { subName: "Basketball", id: crypto.randomUUID() },
        { subName: "Cycling", id: crypto.randomUUID() },
        { subName: "Swimming", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Football boots", id: crypto.randomUUID() },
        { subName: "Basketballs", id: crypto.randomUUID() },
        { subName: "Cycling helmets", id: crypto.randomUUID() },
        { subName: "Swimming goggles", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Health & Beauty",
      id: "health-beauty",
      subCategoryOneName: 'Beauty products',
      subCategoryTwoName: 'Health products',
      subCategories1: [
        { subName: "Skincare", id: crypto.randomUUID() },
        { subName: "Haircare", id: crypto.randomUUID() },
        { subName: "Makeup", id: crypto.randomUUID() },
        { subName: "Fragrance", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Health supplements", id: crypto.randomUUID() },
        { subName: "Vitamins", id: crypto.randomUUID() },
        { subName: "Weight loss supplements", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Industrial Equipment",
      id: "industrial-equipment",
      subCategoryOneName: 'Heavy machinery',
      subCategoryTwoName: 'Tools and equipment',
      subCategories1: [
        { subName: "Excavators", id: crypto.randomUUID() },
        { subName: "Cranes", id: crypto.randomUUID() },
        { subName: "Generators", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Drills", id: crypto.randomUUID() },
        { subName: "Welding equipment", id: crypto.randomUUID() },
        { subName: "Safety equipment", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Home & Garden",
      id: "home-garden",
      subCategoryOneName: 'Furniture',
      subCategoryTwoName: 'Gardening supplies',
      subCategories1: [
        { subName: "Sofas", id: crypto.randomUUID() },
        { subName: "Chairs", id: crypto.randomUUID() },
        { subName: "Tables", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Lawnmowers", id: crypto.randomUUID() },
        { subName: "Flower pots", id: crypto.randomUUID() },
        { subName: "Outdoor furniture", id: crypto.randomUUID() },
      ],
    },
    {
      navTitle: "Deals",
      id: "deals",
      subCategoryOneName: 'Discounted Items',
      subCategoryTwoName: 'Clearance',
      subCategories1: [
        { subName: "50% off", id: crypto.randomUUID() },
        { subName: "70% off", id: crypto.randomUUID() },
      ],
      subCategories2: [
        { subName: "Clearance Sale", id: crypto.randomUUID() },
      ],
    },
  ];

  const categoriesLinks = [
    { id: "electronics", name: 'Electronics' },
    { id: "motors", name: 'Motors' },
    { id: "fashion", name: 'Fashion' },
    { id: "collectibles-art", name: 'Collectibles and Art' },
    { id: "sports", name: 'Sports' },
    { id: "health-beauty", name: 'Health & Beauty' },
    { id: "industrial-equipment", name: 'Industrial Equipment' },
    { id: "home-garden", name: 'Home & Garden' },
    { id: "deals", name: 'Deals' },
  ];

  // Handle hover to set the current category
  const handleCategoryHover = (categoryName) => {
    setHoveredCategory(categoryName); // Set the hovered category's name
  };

  // Toggle clicked category
  const handleCategoryClick = (categoryName) => {
    setClickedCategory((prevCategory) => prevCategory === categoryName ? null : categoryName); // Toggle clicked category
  };

  return (
    <div className="flex flex-col">
      {categoriesLinks.map((category) => (
        <div
          key={category.id}
          className="flex bg-amber-300 mx-5 p-3 cursor-pointer"
          onMouseEnter={() => handleCategoryHover(category.name)} // Set category name when hovered
          onMouseLeave={() => setHoveredCategory(null)} // Reset hover when mouse leaves
          onClick={() => handleCategoryClick(category.name)} // Toggle category on click
        >
          {category.name}

          {/* Conditionally render Subcategory based on hovered or clicked category */}
          {(hoveredCategory === category.name || clickedCategory === category.name) && (
            // Filter CategoryTitle based on the category name
            <Subcategory 
              CategoryTitle={CategoryTitle.filter(item => item.navTitle === category.name)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Ebay;
