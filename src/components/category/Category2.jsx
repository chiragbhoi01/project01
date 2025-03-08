import React from "react";

function Category2() {
  return (
    <div>
      <div className="container bg-amber-200 flex-col h-80 w-full">
        <div className="text-3xl font-medium text-center">Our Collection</div>
        <div id="img" className="flex justify-evenly">
        <div className="bg-red-300 w-1/5 m-3 p-1 rounded-xl"></div>
        <div className="bg-red-300 w-1/5 m-3 p-1 rounded-xl" >box1</div>
        <div className="bg-red-300 w-1/5 m-3 p-1 rounded-xl" >box1</div>
        <div className="bg-red-300 w-1/5 m-3 p-1 rounded-xl" >box1</div>
        </div>
      </div>
    </div>
  );
}

export default Category2;
