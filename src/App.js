import React from "react";
import "./App.css";
import Header from "./pages/header/Header";
import Menu from "./pages/menu/Menu"; 
import Home from "./pages/home/Home"; 

const App = () => {
  return (
    <div className="App">
      <div style={{color: '#fff'}}>
        {/* <Header /> */}
        <Home />
        <Menu />
      </div>
    </div>
  )
}

export default App