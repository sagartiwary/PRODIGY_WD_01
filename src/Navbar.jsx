import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { data } from "./data";
const Navbar = () => {
    const [showLinks,setShowLinks]=useState(true);
    const handleShowLinks=(e)=>{
        setShowLinks(!showLinks)
    }
  return (
    <nav className="bg-white shadow ">
      <div className="sm:flex justify-between items-center p-4">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">
            SAGAR <span className="text-red-700">TIWARY</span>
          </h1>
          <button onClick={handleShowLinks}>
            <FaBars className="text-2xl bg-transparent border-transparent hover:text-sky-400 hover:transform hover:rotate-90 transition duration-150 hover:ease-in-out hover:bg-transparent sm:hidden" />
          </button>
        </div>
        {showLinks && (
          <div>
            <ul className="sm:flex items-center justify-around gap-5">
              {data.map((ele) => {
                const { id, text, url } = ele;
                return (
                  <li key={id}>
                    <a href={url} className=" sm:bg-transparent  text-gray-500 px-[0.5rem] py-[1rem] capitalize transition-all duration-200 ease-in-out block hover:pl-[1.5rem] hover:bg-gray-100">{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
