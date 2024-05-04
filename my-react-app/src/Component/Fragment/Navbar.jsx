import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Element/button";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const [count, setCount] = useState(0);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <nav id="navbar" className="h-[10dvh] w-full flex justify-between items-center bg-slate-900 px-4 relative">
        <div className="list-nav w-full h-[10dvh] flex items-center justify-between z-50">
          <Humberger isActive={isActive} toggleMenu={toggleMenu} />
          <div className="logo font-Garamond text-xl text-orange-800 md:text-2xl">
            Batik<span className="text-orange-600">Ku</span>
          </div>
          <ListNav isActive={isActive} />
          <div id="shopping-cart" className="md:mr-10 relative">
            <Link to="#">
              <img src="/image/shopping-cart.png" alt="cart.img" />
              <div className="count text-[10px] absolute top-[-10px] right-[-10px] bg-orange-600 text-white rounded-full w-4 h-4 flex items-center justify-center">{count}</div>
            </Link>
          </div>
          <Button bg="bg-[#FB6D48] text-orange-100 hover:bg-orange-400 hover:text-white" type="button">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

const Humberger = ({ isActive, toggleMenu }) => {
  return (
    <div className={`humberger-menu flex flex-col gap-1 cursor-pointer md:hidden ${isActive ? "active" : ""}`} onClick={toggleMenu}>
      <div className="line h-[3px] w-6 bg-slate-100 rounded-full origin-top-right"></div>
      <div className="line h-[3px] w-6 bg-slate-100 rounded-full"></div>
      <div className="line h-[3px] w-6 bg-slate-100 rounded-full origin-bottom-right"></div>
    </div>
  );
};

const ListNav = ({ isActive }) => {
  return (
    <>
      <ul
        id="nav-ul"
        className={`bg-slate-100 w-full flex flex-col items-center shadow-md shadow-slate-300 rounded-sm left-0 py-10 gap-5 top-full ${
          isActive ? "block absolute" : "hidden"
        } md:flex md:items-center md:bg-transparent md:shadow-none md:top-0 md:py-0 md:h-full md:list-none md:flex-row md:justify-center font-poppins`}
      >
        <h2 className="px-5 mb-5 font-bold text-xl text-orange-400 md:hidden">List Menu</h2>
        <li className="px-5 mb-5 text-slate-500 hover:text-slate-700 md:text-slate-500 transition duration-300 ease-in-out md:hover:text-slate-100 md:mb-0">
          <Link to="/">Home</Link>
        </li>
        <li className="px-5 mb-5 text-slate-500 hover:text-slate-700 md:text-slate-500 transition duration-300 ease-in-out md:mb-0 md:hover:text-slate-100">
          <Link to="/about">About</Link>
        </li>
        <li className="px-5 mb-5 text-slate-500 md:text-slate-500 transition duration-300 ease-in-out hover:text-slate-100 md:mb-0 md:hover:text-slate-100">
          <Link to="/contact">Product</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
