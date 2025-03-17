import React from "react";
import HomeCategory from "../Home/HomeCategory";

import { HeroSilder } from "../..";

import HomeShopByCategoryData from "../../assets/image/shopbycategory/HomeShopbyCategoryData";
import OurExclusiveCollectionsData from "../../assets/image/ourexclusivecollections/OurExclusiveCollectionsData";
export default function Home() {
  return (
    <>
      <HeroSilder />
      <HomeCategory tittle={'Shop By Category'} imagesObject={HomeShopByCategoryData}/>
      <HomeCategory tittle={'Ecxclusive Collection'} imagesObject={OurExclusiveCollectionsData}/>

    </>
  );
}
