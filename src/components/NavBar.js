import React from "react";
import image11 from "../images/11.jpg";
function NavBar() {
  return (
    <header className="sticky top-0 bg-gray-100 ">
      <ul className="flex p-4  text-yellow-800">
        <li>
          <button className="p-2 rounded-full  w-16 mr-8">
            <img src={image11} alt="" />
          </button>
        </li>
        <li className="mr-3">
          <a href="#home"> Home</a>
        </li>
        <li className="mr-3">
          <a href="#players"> Players</a>
        </li>
        <li className="mr-3">
          <a href="#history"> History</a>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
