import React from "react";
import { CiShop } from "react-icons/ci";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <li className="w-[285px] h-[522px] mb-16" key={index}>
          <div
            className="w-[300px] h-[450px] rounded-md relative p-2 group"
            style={{ backgroundImage: `url(${item.imgUrl})` }}>
        
            <div className="w-full h-full hidden group-hover:flex items-center justify-center">
              <CiShop
                size={20}
                className="w-8 h-8 absolute top-2 right-2 bg-gray-100 bg-opacity-80 hover:bg-opacity-100 hover:text-primary cursor-pointer hover:scale-110 rounded-full p-1 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          <p className="text-grayLight mt-2">{item.type}</p>
          <h1 className="font-[600] text-xl my-1">{item.name}</h1>
          <p>
            <span className="text-grayLight line-through mr-1">
              {item.oldPrice}
            </span>
            <span>${item.newPrice}</span>
          </p>
        </li>
      ))}
    </>
  );
};

export default Card;
