import React from "react";
import { IoClose } from "react-icons/io5";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  console.log(cartItem, "from cart");

  return (
    <div className="h-screen px-10">
      {cartItem.map((item, index) => (
        <div
          key={index}
          className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_0.5fr_0.5fr] md:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
          <div className="flex items-start gap-6">
            <img className="w-16 sm:w-20" src={item.imgUrl} alt="" />
            <div>
              <p className="text-xs sm:text-lg font-medium">{item.name}</p>
              <div className="flex items-center gap-5 mt-2">
                <p>${item.newPrice}</p>
                <p className="line-through text-gray-500">{item.oldPrice}</p>
              </div>
            </div>
          </div>
          <input
            type="number"
            className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 outline-none"
            min={1}
            value={1}
          />
          <p className="cursor-pointer border rounded-full text-center border-neutral-400 w-7 h-7 hover:bg-neutral-300 hover:text-red-600 duration-300">
            X
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
