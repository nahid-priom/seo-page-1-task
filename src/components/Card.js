import React from "react";
import CardItem from "./CardItem";

const Card = () => {
  return (
    <div className="max-w-[300px] m-4 h-screen bg-gray-200 rounded">
      <div className="flex justify-between px-4 py-4">
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-red-600 rounded-l-full"></div>
          <h1 className="font-semibold text-gray-600 text-sm ">Incomplete</h1>
        </div>
        <span className="w-6 h-6 bg-gray-300 rounded flex justify-center text-base font-semibold">
          0
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        
      </div>
    </div>
  );
};

export default Card;
