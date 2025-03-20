import React from "react";

import Silders from "../Silders"; // Importing the Silders component
import ItemCollection from "../ItemCollection";

import iryaData from '../../../assets/image/ourexclusivecollections/irya/iryaData'
import BannerData from "../../../assets/image/HeroSilder/BannerData"
function IryaCollection() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerData.BannerIrya}
        images={iryaData}
        BannerTittle={'Irya'}
      />

      <ItemCollection
        items={iryaData}
        tittleName={'Irya Collection'}
      />
    </div>
    
  );
}

export default IryaCollection;
