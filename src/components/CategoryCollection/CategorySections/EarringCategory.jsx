import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import earringsData from "../../../assets/image/shopbycategory/earrings/earringsData"
import { BannerImage } from "../../../assets/image/HeroSilder/BannerData";
function EarringCategory() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerImage.BannerEarrings}
        images={earringsData}
        BannerTittle={'Earrings'}
      />

      <ItemCollection
        items={earringsData}
        tittleName={'Earrings Category'}
      />
    </div>
    
  );
}

export default EarringCategory;
