import React from "react";

export default function Card({ property }) {
  const { city, averagePrice, propertyCount, imageUrl, imageAlt } = property;
  return (
    
      <div className=" flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
        <img
          className="h-32 w-32  flex-shrink-0"
          src={imageUrl}
          alt={imageAlt}
        />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800 ">{city}</h3>
          <p className="text-gray-600">{averagePrice} / night average</p>
          <div>
            <a className=" text-brand-secondary text-sm font-semibold hover:text-yellow-600">Explore {propertyCount} properties</a>
          </div>
        </div>
      </div>
    
  );
}
