import React from "react";
import Players from "./components/Players";
import Home from "./components/Home";
import History from "./components/History";
import NavBar from "./components/NavBar";
import Squad from "./components/squad/Squad";

function App() {

  return (
<div>
<NavBar/>
  <Home/>
  <Squad/>
  <Players/>
  <History/>
</div>

);
}

export default App;
