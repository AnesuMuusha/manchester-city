import React from "react";
import stadium from "../images/s.jpg";

const History = () => {

    return (
<div id="history" className="p-6">
      <div className="flex justify-center my-6">
      <div className="font-mono font-bold">History</div>
      </div>
      <div>
        <img src={stadium} alt="stadium"/>
      </div>
      <div className="m-6 font-serif  text-yellow-800">
        The other names for the stadium are COMS or Eastlands. The stadium was
        designed by Arup and built by John Laing. It was first designed as part
        of Manchester's failed bid for the 2000 Summer Olympics. The stadium was
        built for the 2002 Commonwealth Games at a cost of £110 million.
      </div>
    </div>

  );
};

export default History;
