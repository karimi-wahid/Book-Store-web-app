import React from "react";
import CardList from "./CardList";

const BestSellingBooks = () => {
  return (
    <div className="grid place-items-center w-full space-y-10">
      <h1 className="text-2xl lg:text-5xl font-[600]">Best Selling Books</h1>
      <p className="text-grayLight lg:w-[60%] text-center">
        Vulputate vulputate eget cursus nam ultricies mauris, malesuada
        elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget
        aenean.
      </p>
      <CardList />
      <button className="px-5 py-3 text-secondary duration-700 border border-primary hover:bg-primary hover:text-white rounded-lg mt-10">
        Shop All Books
      </button>
    </div>
  );
};

export default BestSellingBooks;
