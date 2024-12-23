import React from "react";
import { award } from "../constants";

const Awards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-10">
      {award.map((item, index) => (
        <div className="w-[276] h-[138] space-y-1" key={index}>
          <img src={item.imgUrl} alt={item.title} />
          <h1 className="font-[600] text-[20px]">{item.title}</h1>
          <p className="text-grayLight lg:w-[60%]">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Awards;
