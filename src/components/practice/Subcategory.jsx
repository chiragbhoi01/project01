import React from "react";
import {Necklaces6} from '../../image'
function Subcategory({ CategoryTitle }) {
  return (
    <>
      <div id="container" className="flex justify-evenly w-max">
        {CategoryTitle.map((category) => (
          <div key={category.id} id="mainbox" className="flex bg-amber-300 m-5 justify-center">
            <div>
              <h1 className="font-bold flex justify-center">{category.subCategoryOneName}</h1>
              <ul className="flex-col">
                {category.subCategories1.map((subCategory, index) => (
                  <li key={subCategory.id} className="m-5">
                    {subCategory.subName}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-bold flex justify-center">{category.subCategoryTwoName}</h1>
              <ul className="flex-col">
                {category.subCategories2.map((subCategory, index) => (
                  <li key={subCategory.id} className="m-5">
                    {subCategory.subName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Subcategory;
