import irya1 from '../irya/irya1.jpg';
import irya2 from '../irya/irya2.jpg';
import irya3 from '../irya/irya3.jpg';
import irya4 from '../irya/irya4.jpg';
import irya5 from '../irya/irya5.jpg';
import irya6 from '../irya/irya6.jpg';
import irya7 from '../irya/irya7.jpg';
import irya8 from '../irya/irya8.jpg';
import irya9 from '../irya/irya9.jpg';
import irya10 from '../irya/irya10.jpg';
import irya11 from '../irya/irya11.jpg';
import irya12 from '../irya/irya12.jpg';
import irya13 from '../irya/irya13.jpg';
import irya14 from '../irya/irya14.jpg';
import irya15 from '../irya/irya15.jpg';
import irya16 from '../irya/irya16.jpg';
import irya17 from '../irya/irya17.jpg';
import irya18 from '../irya/irya18.jpg';
import irya19 from '../irya/irya19.jpg';
import irya20 from '../irya/irya20.jpg';

const iryaData = [
  {
    name: "Mystic Elegance Moissanite Silver Pendant Necklace",
    image: irya1,
    price: "Rs. 4,499.00",
    ratings: 4.5,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Mystic Green Moissanite Silver necklace",
    image: irya2,
    price: "Rs. 4,499.00",
    ratings: 4.2,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Iridescent Moissanite Silver Pendant Necklace",
    image: irya3,
    price: "Rs. 4,499.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Graceful Green Moissanite Silver Drop Earrings",
    image: irya4,
    price: "Rs. 6,699.00",
    ratings: 4.7,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Classic CZ Halo Moissanite Silver Stud Earrings",
    image: irya5,
    price: "Rs. 3,599.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Green Glimmer Moissanite Silver Drop Earrings",
    image: irya6,
    price: "Rs. 4,499.00",
    ratings: 4.4,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Baroque Stackable Moissanite Silver Ring",
    image: irya7,
    price: "Rs. 6,299.00",
    ratings: 4.8,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Gaja Kavya Jadau Finger Ring",
    image: irya8,
    price: "Rs. 5,399.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Baroque Delicate Moissanite Silver Ring",
    image: irya9,
    price: "Rs. 4,499.00",
    ratings: 4.5,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Matsya Double Motif Silver Cuff Bracelet",
    image: irya10,
    price: "Rs. 4,899.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Irya Delicate Jadau Silver Bangles",
    image: irya11,
    price: "Rs. 20,399.00",
    ratings: 4.9,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Nadia Moissanite Silver Bracelet",
    image: irya12,
    price: "Rs. 7,999.00",
    ratings: 4.4,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Baroque Coin Moissanite Silver Pendant Necklace",
    image: irya13,
    price: "Rs. 7,999.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Matsya Pearl String Statement Silver Necklace",
    image: irya14,
    price: "Rs. 15,599.00",
    ratings: 4.7,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Padmini Pendant Kempu Silver Necklace",
    image: irya15,
    price: "Rs. 17,799.00",
    ratings: 4.8,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Mrinala Gold Plated Silver Drop Earrings",
    image: irya16,
    price: "Rs. 7,099.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Classic Moissanite Silver Stud Earrings",
    image: irya17,
    price: "Rs. 7,999.00",
    ratings: 4.5,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Sadya Gold Plated Sterling Silver Earrings",
    image: irya18,
    price: "Rs. 11,599.00",
    ratings: 4.6,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "Out of Stock"
  },
  {
    name: "Taamara Kemp Jadau Silver Finger Ring",
    image: irya19,
    price: "Rs. 3,999.00",
    ratings: 4.2,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
  {
    name: "Meena Kavya Antique Gold Finish Silver Finger Ring",
    image: irya20,
    price: "Rs. 4,499.00",
    ratings: 4.3,
    randomKey: Math.random().toString(36).substring(2),  // Updated random key generation
    availability: "In Stock"
  },
];

export default iryaData;
