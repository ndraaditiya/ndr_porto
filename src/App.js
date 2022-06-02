import React from "react";
import "./App.css";
import ParticlesBg from "particles-bg"
import Header from "./pages/header/Header";
import Menu from "./pages/menu/Menu"; 
import Home from "./pages/home/Home"; 

const App = () => {
  return (
    <div className="App">
      <ParticlesBg type="circle" bg={true} />
      <div style={{color: '#fff'}}>
        {/* <Header /> */}
        <Home />
        <Menu />
      </div>
    </div>
  )
}

export default App