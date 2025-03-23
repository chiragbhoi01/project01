import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import NecklaceData from "../../../assets/image/shopbycategory/necklace/NecklaceData"
import { BannerImage } from "../../../assets/image/HeroSilder/BannerData";
function NecklaceCategory() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerImage.BannerNecklace}
        images={NecklaceData}
        BannerTittle={'Necklaces'}
      />

      <ItemCollection
        items={NecklaceData}
        tittleName={'Necklace Category'}
      />
    </div>
    
  );
}

export default NecklaceCategory;
