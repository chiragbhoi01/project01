import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import chokersData from "../../../assets/image/shopbycategory/chokers/chokersData"
import { BannerImage } from "../../../assets/image/HeroSilder/BannerData";
function ChokerCategory() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerImage.BannerChoker}
        images={chokersData}
        BannerTittle={'Chockers'}
      />

      <ItemCollection
        items={chokersData}
        tittleName={'Chockers Category'}
      />
    </div>
    
  );
}

export default ChokerCategory;
