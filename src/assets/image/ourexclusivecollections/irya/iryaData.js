const iryaData = [
  {
    name: "Mystic Elegance Moissanite Silver Pendant Necklace",
    image: "irya1.jpg",
    price: "Rs. 4,499.00",
    ratings: 4.5,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Mystic Green Moissanite Silver necklace",
    image: "irya2.jpg",
    price: "Rs. 4,499.00",
    ratings: 4.2,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Iridescent Moissanite Silver Pendant Necklace",
    image: "irya3.jpg",
    price: "Rs. 4,499.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Graceful Green Moissanite Silver Drop Earrings",
    image: "irya4.jpg",
    price: "Rs. 6,699.00",
    ratings: 4.7,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Classic CZ Halo Moissanite Silver Stud Earrings",
    image: "irya5.jpg",
    price: "Rs. 3,599.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Green Glimmer Moissanite Silver Drop Earrings",
    image: "irya6.jpg",
    price: "Rs. 4,499.00",
    ratings: 4.4,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Baroque Stackable Moissanite Silver Ring",
    image: "irya7.jpg",
    price: "Rs. 6,299.00",
    ratings: 4.8,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Gaja Kavya Jadau Finger Ring",
    image: "irya8.jpg",
    price: "Rs. 5,399.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Baroque Delicate Moissanite Silver Ring",
    image: "irya9.jpg",
    price: "Rs. 4,499.00",
    ratings: 4.5,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Matsya Double Motif Silver Cuff Bracelet",
    image: "irya10.jpg",
    price: "Rs. 4,899.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Irya Delicate Jadau Silver Bangles",
    image: "irya11.jpg",
    price: "Rs. 20,399.00",
    ratings: 4.9,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Nadia Moissanite Silver Bracelet",
    image: "irya12.jpg",
    price: "Rs. 7,999.00",
    ratings: 4.4,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Baroque Coin Moissanite Silver Pendant Necklace",
    image: "irya13.jpg",
    price: "Rs. 7,999.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Matsya Pearl String Statement Silver Necklace",
    image: "irya14.jpg",
    price: "Rs. 15,599.00",
    ratings: 4.7,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Padmini Pendant Kempu Silver Necklace",
    image: "irya15.jpg",
    price: "Rs. 17,799.00",
    ratings: 4.8,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Mrinala Gold Plated Silver Drop Earrings",
    image: "irya16.jpg",
    price: "Rs. 7,099.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Classic Moissanite Silver Stud Earrings",
    image: "irya17.jpg",
    price: "Rs. 7,999.00",
    ratings: 4.5,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Sadya Gold Plated Sterling Silver Earrings",
    image: "irya18.jpg",
    price: "Rs. 11,599.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Taamara Kemp Jadau Silver Finger Ring",
    image: "irya19.jpg",
    price: "Rs. 3,999.00",
    ratings: 4.2,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Meena Kavya Antique Gold Finish Silver Finger Ring",
    image: "irya20.jpg",
    price: "Rs. 4,499.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Pia Jadau Silver Bracelet",
    image: "irya21.jpg",
    price: "Rs. 5,399.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Baroque Double Layered Moissanite Silver Bangle",
    image: "irya22.jpg",
    price: "Rs. 34,599.00",
    ratings: 4.8,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Pyramid Dainty Open Style Silver Bracelet",
    image: "irya23.jpg",
    price: "Rs. 4,399.00",
    ratings: 4.4,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  }
];

export default iryaData;
