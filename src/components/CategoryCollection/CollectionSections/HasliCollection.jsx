import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import hasliData from "../../../assets/image/ourexclusivecollections/hasli/hasliData";
import { BannerImage } from "../../../assets/image/HeroSilder/BannerData";
function HasliCollection() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerImage.BannerHasli}
        images={hasliData}
        BannerTittle={'Hasli'}
      />

      <ItemCollection
        items={hasliData}
        tittleName={'Hasli Collection'}
      />
    </div>
    
  );
}

export default HasliCollection;
