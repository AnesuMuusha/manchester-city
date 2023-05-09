import React from "react";
import image11 from "../images/11.jpg";
import image12 from "../images/14.jpg";

const Home = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${image12})` }}>
      <div className="flex flex-col">
        <div>
          <button className="p-2 rounded-full  w-16">
            <img src={image11} alt="" />
          </button>
        </div>

        <div className="flex justify-center">
          <div className="p-2 mr-6 mb-4 rounded bg-gray-600 text-red-900 w-32">
            Welcome to Manchester City
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
