import React from "react";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image7 from "../images/7.jpg";
import image4 from "../images/4.jpeg";

const Players = () => {
  return (
    <div id="players" className="m-2 bg-slate-100  lg:m- lg:text-xl xl:text-3xl xl:mx-11/12 lg:px-16">
      <div className="p-1">
        <div className="font-bold lg:flex lg:justify-center flex justify-center">
          Top Four Players
        </div>

        <div className="mt-6 md:flex">
          <div className="">
            <img src={image1} alt=""></img>
          </div>
          <div>
            <div className="ml-6 font-serif w-1/2 text-yellow-800">
              Erling Braut Haaland
            </div>
            <div className=" m-6 font-serif  text-yellow-800">
              Erling Braut Haaland is a Norwegian professional footballer who
              plays as a striker for Premier League club Manchester City and the
              Norway national team. Considered one of the best players in the
              world, he is known for his speed, strength, and finishing inside
              the box.
            </div>
          </div>
        </div>

        <div className="mt-6 md:flex">
          <div className="">
            <img src={image2} alt=""></img>
          </div>
          <div>
            <div className="ml-6 font-serif w-1/2 text-yellow-800">
              Jack Peter Grealish
            </div>
            <div className=" m-6 font-serif  text-yellow-800">
              Jack Peter Grealish is an English professional footballer who
              plays as a winger or attacking midfielder for Premier League club
              Manchester City and the England national team. Grealish joined
              Aston Villa at the age of six, and made his debut for the club in
              May 2014.
            </div>
          </div>
        </div>

        <div className=" mt-6 md:flex">
          <div className=" ">
            <img src={image7} alt=""></img>
          </div>
          <div>
            <div className="ml-6 font-serif w-1/2 text-yellow-800">
            Philip Walter Foden 
            </div>
            <div className=" m-6 font-serif text-yellow-800">
              Philip Walter Foden is an English professional footballer who
              plays as a midfielder for Premier League club Manchester City and
              the England national team. He is considered one of the best young
              players in the world.
            </div>
          </div>
        </div>

        <div className=" mt-6 md:flex">
          <div className=" ">
            <img src={image4} alt=""></img>
          </div>
          <div>
            <div className="ml-6 font-serif w-1/2 text-yellow-800">
              Riyad Karim Mahrez
            </div>
            <div className=" m-6 font-serif text-yellow-800">
              Riyad Karim Mahrez is a professional footballer who plays as a
              winger for Premier League club Manchester City and captains the
              Algeria national team. Mahrez began his career as a youth player
              for French club AAS Sarcelles.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
