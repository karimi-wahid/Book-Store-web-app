import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { audioBook } from "../constants";

const AudioBooks = () => {
  return (
    <div className="grid place-items-center space-y-5">
      <h1 className="text-2xl font-[600]">Latest Audiobook</h1>
      <p className="text-grayLight lg:w-[60%] text-center">
        Vulputate vulputate eget cursus nam ultricies mauris, malesuada
        elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget
        aenean.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {audioBook.map((item, index) => (
          <div className="w-[300px] h-[352px]" key={index}>
            <img
              src={item.imgUrl}
              alt={item.title}
              className="w-[256px] h-[256px]"
            />
            <h1 className="text-xl font-[600] my-3">{item.title}</h1>
            <div className="flex items-center gap-3 text-secondary cursor-pointer">
              <IoIosPlayCircle size={20} />
              <p>Listen Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioBooks;
