import React from "react";
import image12 from "../images/14.jpg";

const Home = () => {
  return (
    <div id="home" className="" style={{ backgroundImage: `url(${image12})` }}>
      <div className="flex flex-col">

        <div className="flex justify-center">
          <div className="p-2 mr-6 my-16 rounded  bg-gray-300 text-yellow-800 w-32">
            Welcome to Manchester City
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;