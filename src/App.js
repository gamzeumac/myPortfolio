import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';


let paramsData = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 900
      }
    },
    shape: {
      type: "circle",
      stroke: {
        width: 6,
        color: "#f9ab00"
      }
    }
  }
}

function App() {
  return (        
      <div className="App">         
        <NavBar />  
        <Particles className="particles-canvas"  params={paramsData}  />      
        <Header />
        <About />
        <Project />
        <Skills /> 
        <Contact />
        <Footer />  
      </div>
    );
}

export default App;

