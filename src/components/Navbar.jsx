import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navItems } from "../constants/NavItems";
import { FaBasketShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

function Navbar({setSideOpen}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const navigate = useNavigate();
  const totalQuantity = useSelector(state => state.cart.quantity)
  const totalPrice = useSelector(state => state.cart.price)

  const handleSearch = () => {
    setInputOpen(!inputOpen);
    navigate('/books')
  }


  return (
    <nav className="relative h-[104px] flex items-center justify-center">
      <div className="container px-6 py-5 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between ">
            <Link to="/">
              <img
                className="w-auto h-6 sm:h-7"
                src="https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/site-logo.svg"
                alt="logo"
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center gap-5">
              <div className="flex gap-3 p-3 text-primary relative cursor-pointer" onClick={() => setSideOpen(true)}>
                <span>${totalPrice > 0 ? totalPrice : '0.00'}</span>
                <FaBasketShopping size={25} />
                <p className="absolute top-0 right-0 w-5 h-5 p-2 flex items-center justify-center text-white bg-primary rounded-full">
                  {totalQuantity > 0 ? totalQuantity : '0'}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 text-primary"
                aria-label="toggle menu">
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 lg:w-auto w-full px-6 py-4 transition-all duration-300 ease-in-out bg-slate-50 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}>
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              {navItems.map((item, index) => (
                <NavLink
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  key={index}
                  className={({ isActive }) =>
                    `px-3 py-2 mx-3 mt-2 text-[16px] lg:mt-0 border-b lg:border-none rounded-md transition-colors duration-300 transform 
                                ${
                                  isActive
                                    ? "text-triple font-bold"
                                    : "text-grayLight lg:text-grayLight border-neutral-300 hover:text-triple"
                                }`
                  }>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden  lg:flex items-center mt-4 lg:mt-0">
            <div className="flex justify-end py-1 w-[150px] p-1 gap-3">
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${
                  inputOpen ? "w-full opacity-100" : "w-0 opacity-0"
                }`}>
                <input
                  type="text"
                  className="py-2 w-full border border-neutral-300 px-2 rounded-lg outline-none"
                  placeholder="Search here..."
                />
              </div>
              
              <CiSearch
                onClick={() => handleSearch()}
                size={30}
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-3 p-3 text-primary relative cursor-pointer">
              <span>${totalPrice > 0 ? totalPrice : '0.00'}</span>
              <FaBasketShopping size={25} className="cursor-pointer hover:text-secondary" onClick={() => setSideOpen(true)}/>
              <p className="absolute top-0 right-0 w-5 h-5 p-2 flex items-center justify-center text-white bg-primary rounded-full">
                {totalQuantity > 0 ? totalQuantity : '0'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
