import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from "react-particles-js";
import NavBar from './components/NavBar';
import Header from './components/Header';
 import About from './components/About';
import Project from './components/Project';

import Skills from './components/Skills';

import Footer from './components/Footer';


function App() {
  return (

    <Router>
      <div className="App">
      <NavBar/>

      <Particles
        className="particles-canvas"
        params={{
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
        }}
      />
        
        <Header />
        <About />
        <Project/>
        <Skills/>
        <Footer/>

        <Switch>
         {/*  <Route path="/Project">
            <Project />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route> */}

          <Route exact path="/">
           {/*  <Header /> */}
          </Route>
        </Switch>

       {/*  <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

