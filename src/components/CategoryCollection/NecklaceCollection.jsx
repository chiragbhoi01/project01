import React from "react";

import Silders from "./Silders"; // Importing the Silders component
import ItemCollection from "./ItemCollection";

import NecklaceData from "../../../public/images/shopbycategory/necklace/NecklaceData";
import BannerData from "../../../public/images/HeroSilder/BannerData";
function NecklaceCollection() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerData.BannerNecklace}
        images={NecklaceData}
        BannerTittle={'Necklaces'}
      />
      <ItemCollection
        items={NecklaceData}
        
      />
    </div>
    
  );
}

export default NecklaceCollection;
