import "@fontsource/roboto/500.css";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleArrow = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sidebar w-1/4 h-screen bg-white">
      <h1 className="text-[#55BEFF] font-roboto text-xl font-bold ml-4 mb-10 mt-5 first-letter:text-4xl">Ciprat</h1>
      <div className="main-menu text-[#7C98C3]">
        <h5 className="uppercase text-[12px] font-poppins my-4 pl-4">main menu</h5>
        <ul className="flex flex-col gap-2">
          <li className="flex hover:border-l-[3px] border-blue-400 px-2 py-1 hover:bg-[#E8F3FF] transition-all duration-300 cursor-pointer">
            <HomeIcon fontSize="small" />
            <a href="#" className="text-sm">
              Dasboard
            </a>
          </li>
          <li className="flex hover:border-l-[3px] border-blue-400 px-2 py-1 hover:bg-[#E8F3FF] transition-all duration-300 items-center cursor-pointer">
            <AddIcon fontSize="small" />
            <a href="#" className="text-sm">
              Product
            </a>
            <div className="product-wrapper flex flex-col items-center relative" onClick={handleArrow}>
              <KeyboardArrowDownIcon fontSize="small" className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
              <ul className={`absolute top-[100%] text-[#7C98C3] gap-2 p-2 transition-opacity duration-200 transform translate-x-4 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                <li>
                  <a href="#">Add</a>
                </li>
                <li>
                  <a href="#">Edit</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
