import React from "react";

import Silders from "./Silders"; // Importing the Silders component
import ItemCollection from "./ItemCollection";
import { hasliData } from "../../../public/images/ourexclusivecollections/hasli/hasliData";
import BannerData from "../../../public/images/HeroSilder/BannerData";
function HasliCollection() {


  return (
    <div>

      {/* Pass the images and backgroundImage props to the Silders component */}
      <Silders
        backgroundImage={BannerData.BannerHasli}
        images={hasliData}
        BannerTittle={'Necklaces'}
      />
      <ItemCollection
        items={hasliData}
        
      />
    </div>
    
  );
}

export default HasliCollection;
