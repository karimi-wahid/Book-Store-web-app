import React from "react";
import { CiShop } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }
  
  return (
    <>
      {data.map((item, index) => (
        <Link to={`/books/${item.name.replace(/\s+/g, '-')}`} className="md:mb-10 w-[250px]" key={index}>
          <div
            className="w-[250px] h-[320px] rounded-md relative p-2 group bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${item.imgUrl})` }}>
        
            <div className="w-full h-full hidden group-hover:flex items-center justify-center">
              <CiShop
                onClick={()=> handleAddToCart(item)}
                size={20}
                className="w-8 h-8 absolute top-2 right-8 bg-gray-100 bg-opacity-80 hover:bg-opacity-100 cursor-pointer hover:scale-110 rounded-full p-1 duration-300 "
              />
            </div>
          </div>
          <div className="pl-5">
          <p className="text-grayLight mt-2">{item.type}</p>
          <h1 className="font-[400] text-xl my-1">{item.name}</h1>
          <p>
            <span className="text-grayLight line-through mr-1">
              {item.oldPrice}
            </span>
            <span>${item.newPrice}</span>
          </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
