import React from 'react'
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpeg";

const Players=()=>{
  return (
    <div className="m-2 bg-slate-100">
    <div className="p-1"> 
      <div className="font-bold ">Manchester city</div>
      <div className="mt-6">
      <div className="">
        <img src={image1} alt=""></img>
      </div>
      <div>
      <div className="ml-6 font-serif w-1/2 text-yellow-800">
      Erling Braut Haaland
      </div>
      <div className=" m-6 font-serif  text-yellow-800">
        Erling Braut Haaland is a Norwegian professional footballer who plays
        as a striker for Premier League club Manchester City and the Norway
        national team. Considered one of the best players in the world, he is
        known for his speed, strength, and finishing inside the box.
      </div>
    </div>
    </div> 
    <div className="mt-6">
      <div className="">
        <img src={image2} alt=""></img>
      </div>
      <div>
      <div className="ml-6 font-serif w-1/2 text-yellow-800">
      Erling Braut Haaland
      </div>
      <div className=" m-6 font-serif  text-yellow-800">
        Erling Braut Haaland is a Norwegian professional footballer who plays
        as a striker for Premier League club Manchester City and the Norway
        national team. Considered one of the best players in the world, he is
        known for his speed, strength, and finishing inside the box.
      </div>
    </div>
    </div>
    
    <div className=" mt-6">
      <div className=" ">
        <img src={image3} alt=""></img>
      </div>
      <div>
      <div className="ml-6 font-serif w-1/2 text-yellow-800">
      Erling Braut Haaland
      </div>
      <div className=" m-6 font-serif text-yellow-800">
        Erling Braut Haaland is a Norwegian professional footballer who plays
        as a striker for Premier League club Manchester City and the Norway
        national team. Considered one of the best players in the world, he is
        known for his speed, strength, and finishing inside the box.
      </div>
    </div>
    </div>
    
    <div className=" mt-6">
      <div className=" ">
        <img src={image4} alt=""></img>
      </div>
      <div>
      <div className="ml-6 font-serif w-1/2 text-yellow-800">
      Erling Braut Haaland
      </div>
      <div className=" m-6 font-serif text-yellow-800">
        Erling Braut Haaland is a Norwegian professional footballer who plays
        as a striker for Premier League club Manchester City and the Norway
        national team. Considered one of the best players in the world, he is
        known for his speed, strength, and finishing inside the box.
      </div>
    </div>
    </div>
    </div>
  </div>
  )
}

export default Players;