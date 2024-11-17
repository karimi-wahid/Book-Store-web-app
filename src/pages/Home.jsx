import React from "react";
import Hero from "../components/Hero";
import AuthorBiography from "../components/AuthorBiography";
import Awards from "../components/Awards";
import BestSellingBooks from "../components/BestSellingBooks";
import AudioBooks from "../components/AudioBooks";
import BeTheFirst from "../components/BeTheFirst";

const Home = () => {
  return (
    <div className="w-full px-5 space-y-32">
      <Hero />
      <div>
        <AuthorBiography />
        <Awards />
      </div>
      <BestSellingBooks />
      <AudioBooks />
      <BeTheFirst />
    </div>
  );
};

export default Home;
