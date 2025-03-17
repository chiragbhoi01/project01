import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import nakshatraData from "../../../assets/image/ourexclusivecollections/nakshatra/nakshatraData";
import BannerData from "../../../assets/image/HeroSilder/BannerData"
function NakshatraCollection() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerData.BannerNakshatra}
        images={nakshatraData}
        BannerTittle={'Nakshatra'}
      />

      <ItemCollection
        items={nakshatraData}
        tittleName={'Nakshatra Collection'}
      />
    </div>
    
  );
}

export default NakshatraCollection;
