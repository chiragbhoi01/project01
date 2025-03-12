import React from "react";
import HomeCategory from "../Home/HomeCategory";
import { HeroSilder } from "../..";
import { HomeShopByCategoryData } from "../../../public/images/shopbycategory/HomeShopbyCategoryData";
import { OurExclusiveCollectionsData } from "../../../public/images/ourexclusivecollections/OurExclusiveCollectionsData";
export default function Home() {
  return (
    <>
      <HeroSilder />
      <HomeCategory
        tittle={"Shop By Category"}
        imagesObject={HomeShopByCategoryData}
      />
      <HomeCategory
        tittle={"Our Exclusive Collection"}
        imagesObject={OurExclusiveCollectionsData}
      />
    </>
  );
}
