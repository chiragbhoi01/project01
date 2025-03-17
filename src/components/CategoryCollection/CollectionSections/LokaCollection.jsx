import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import lokaData from "../../../assets/image/ourexclusivecollections/loka/lokaData";
import BannerData from "../../../assets/image/HeroSilder/BannerData"
function LokaCollection() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerData.BannerLoka}
        images={lokaData}
        BannerTittle={'Loka'}
      />

      <ItemCollection
        items={lokaData}
        tittleName={'Loka Collection'}
      />
    </div>
    
  );
}

export default LokaCollection;
