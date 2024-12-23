import React from "react";

const BeTheFirst = ({bool}) => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-slate-50 h-[50vh]">
      <h1 className="text-2xl lg:text-5xl font-[600] mb-7">Be the First to know</h1>
      <p className="text-grayLight lg:w-[35%] text-center">
        Lectus amet scelerisque fusce est venenatis, eget enim dolor amet vitae
        pharetra
      </p>
      {bool ? 
      <div className="w-full md:w-[40] lg:w-[40%] flex gap-2 mt-5">
        <input type="email" required placeholder="Your email please" 
        className="w-[60%] outline-none border-neutral-300 border p-3" />
        <button className="w-[38%] py-3 hover:bg-primary border border-primary hover:text-white">Subscribe</button>
      </div>
      : ''}
    </div>
  );
};

export default BeTheFirst;
