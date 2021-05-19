import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from "react-particles-js";
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {
  return (
        
      <div className="App">
        <Router>  
        <NavBar />
        <Switch>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
         
        </Switch>


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
        <Header /><About /><Project /><Skills /> <Contact /><Footer />
      </Router> 
      </div>
    

  );
}

export default App;

