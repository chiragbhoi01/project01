import shopbycategory1 from "../shopbycategory/shopbycategory1.png";
import shopbycategory2 from "../shopbycategory/shopbycategory2.png";
import shopbycategory3 from "../shopbycategory/shopbycategory3.png";
import shopbycategory4 from "../shopbycategory/shopbycategory4.png";

const HomeShopByCategoryData = [
    {
        id: 1,
        image: shopbycategory1,
        name: 'Earrings',
        route: '/earringcollection',  // Added route for Earrings
    },
    {
        id: 2,
        image: shopbycategory2,
        name: 'Necklace',
        route: '/necklacecollection',  // Added route for Necklace
    },
    {
        id: 3,
        image: shopbycategory3,
        name: 'Chokers',
        route: '/chokerscollection',  // Added route for Chokers
    },
    {
        id: 4,
        image: shopbycategory4,
        name: 'Bangles',
        route: '/banglecollection',  // Added route for Bangles
    },
];

export default HomeShopByCategoryData;
