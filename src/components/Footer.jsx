import React from "react";
import { footerLink, footerSocial } from "../constants/footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-triple px-5 h-[50vh] flex flex-col items-center justify-center space-y-16">
      <div className="w-full flex items-center justify-around flex-col lg:flex-row space-y-5">
        <img
          src="https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/site-logo-white.svg"
          alt="logo-white"
        />
        <ul className="flex items-center gap-2 lg:gap-5 text-white">
          {footerLink.map((item, index) => (
            <Link to="#" key={index}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
        <ul className="flex items-center gap-5 text-white">
          {footerSocial.map((item, i) => (
            <Link to="#" key={i}>
              <li className="hover:scale-125 duration-1000 hover:text-primary">{item.icon}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-white text-center">
          Copyright © 2024 Book Store | Powered by Book Store
        </p>
      </div>
    </div>
  );
};

export default Footer;
