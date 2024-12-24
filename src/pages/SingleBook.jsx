import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Data";
import BookDescription from "../components/BookDescription";
import BookReview from "../components/BookReview";
import RelatedProducts from "../components/RelatedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { toast } from "react-toastify";

const SingleBook = () => {
  const { bookName } = useParams();
  const filterBook = Data.filter(
    (item) => item.name == bookName.replace(/-/g, " ")
  );
  const bookType = filterBook[0].type;
  const [inputValue, setInputValue] = useState(1);
  const dispatch = useDispatch();


  const handleAddToCart = (item) => {
    dispatch(addToCart({...item, quantity:inputValue}));
    
      toast.success("Item added to cart", )
    
  };

  const [book, setBook] = useState("description");

  return (
    <div className="flex items-center justify-center my-10 overflow-x-hidden">
      <div className=" p-10 w-[90%]">
        {filterBook.map((item, index) => (
          <div
            className="grid sm:grid-cols-2 grid-cols-1 gap-x-5 bg-slate-50 sm:p-10"
            key={index}>
            <div className="sm:place-items-end">
              <img src={item.imgUrl} alt={item.name} />
            </div>
            <div className="space-y-4">
              <p className="text-grayLight">{item.type}</p>
              <h1 className="text-3xl font-thin w-full">{item.name}</h1>
              <p className="text-xl font-semibold">${item.newPrice}</p>
              <p className="text-grayLight md:w-[75%]">
                Books have long been a cornerstone of human culture, serving as
                vehicles for knowledge, creativity, and expression. Whether
                fiction or non-fiction, books play an essential role in shaping
                our understanding of the world, enhancing our imagination, and
                connecting us to others.
              </p>
              <div className="flex gap-x-3">
                <input
                  value={inputValue >= 1 ? inputValue : 1}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="number"
                  className="outline-none text-center w-14 border border-neutral-300 rounded-md"
                />
                <button
                  onClick={() => handleAddToCart(item)}
                  className="px-6 py-2 border border-primary hover:bg-primary hover:text-white duration-500 rounded-md">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full border-t border-neutral-300 my-10 ">
          <div className="flex gap-5 font-semibold mb-5 cursor-pointer">
            <p
              className={`${
                book == "description" ? "border-t-2" : ""
              } border-black`}
              onClick={() => setBook("description")}>
              Description
            </p>
            <p
              className={`${book == "review" ? "border-t-2" : ""} border-black`}
              onClick={() => setBook("review")}>
              Review
            </p>
          </div>
          {book == "description" ? <BookDescription /> : <BookReview />}
        </div>
        <div>
          <RelatedProducts bookType={bookType} />
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
