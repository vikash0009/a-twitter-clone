import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Feed from "./Feed";
import Subscribe from "./Subscribe";
import Widgets from "./Widgets";






function App() {
  return (
    <div className='App'>
      <Subscribe />
      

      {/*Navbar*/}
      <Navbar />

      {/*feed*/}
      <Feed />

      {/*Widgets*/}
      <Widgets />
    </div>
  );
}

export default App;
