import React, { useState } from "react";
import image2 from "../../images/st.jpg";
import left from "../../images/left.png";
import right from "../../images/right.png";
import SquadPost from "./SquadPost";
import { list } from "./SquadList";
const Squad = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const currentPlayer = list[currentPlayerIndex];

  const handleLeftArrowClick = () => {
    setCurrentPlayerIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentPlayerIndex((prevIndex) =>
      prevIndex === list.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="squad" className="bg-gray-200 pt-6">
      <div></div>
      <div className="mx-2 flex justify-center h-60">
        <img src={image2} alt="squad" />
      </div>
      <div className="border-t border-gray-400 mt-6">
        <div className="m-6 font-serif  text-yellow-800">
          Man. City squad Goalkeepers jugador Ederson jugador S. Ortega jugador
          S. Carson Defenders jugador Rúben Dias jugador J. Stones jugador M.
          Akanji jugador N. Aké jugador K. Walker jugador A. Laporte jugador S.
          Gómez jugador Rico Lewis jugador B. Mendy Midfielders jugador K. De
          Bruyne jugador Rodri jugador Bernardo Silva jugador I. Gündogan
          jugador P. Foden jugador K. Phillips jugador Maximo Perrone jugador C.
          Palmer Strikers jugador E. Haaland jugador R. Mahrez jugador J.
          Grealish jugador J. Álvarez jugador B. Knight
        </div>
      </div>
      <div>
        <div className="flex  justify-center my-4">
          <div>
            <button className="border border-black rounded-full w-6">
              <img src={left} alt="left" onClick={handleLeftArrowClick}></img>
            </button>
          </div>
          <div>
            <SquadPost name={currentPlayer.name} />
          </div>
          <div>
            <button className="border border-black rounded-full w-6">
              <img
                src={right}
                alt="right"
                onClick={handleRightArrowClick}
              ></img>
            </button>
          </div>
        </div>
        <div className="p-3 animate-pulse">
          <SquadPost image={currentPlayer.image} />
        </div>
        <div className="m-6 font-serif  text-yellow-800">
          <SquadPost bio={currentPlayer.Bio} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Squad;
