import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import banglesData from "../../../assets/image/shopbycategory/bangles/banglesData"
import BannerData from "../../../assets/image/HeroSilder/BannerData"
function BanglesCategory() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerData.BannerBangle}
        images={banglesData}
        BannerTittle={'Bangles'}
      />

      <ItemCollection
        items={banglesData}
        tittleName={'Bangles Category'}
      />
    </div>
    
  );
}

export default BanglesCategory;
