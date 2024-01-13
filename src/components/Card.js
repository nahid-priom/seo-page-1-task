import React from "react";
import CardItem from "./CardItem";

const Card = ({ title, color }) => {
  return (
    <div className="w-[320px] m-4 flex flex-col h-[720px] bg-gray-200 rounded flex-1">
      <div className="flex justify-between px-4 py-4">
        <div className="flex gap-2">
          {color && <div className={`w-6 h-6 ${color} rounded-l-full`}></div>}
          <h1 className="font-semibold text-gray-600 text-sm ">{title}</h1>
        </div>
        <span className="w-6 h-6 bg-gray-300 rounded flex justify-center text-base font-semibold">
          0
        </span>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto">
        <CardItem />
        <CardItem />
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
