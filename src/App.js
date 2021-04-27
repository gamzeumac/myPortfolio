import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'; */


function App() {
  return (

    <Router>
      <div className="App">
        <p>hallo</p>
{/*         <NavBar/> */}
        
{/*         <Header />

        <Switch>
          <Route path="/Project">
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
          </Route>

          <Route exact path="/">
            <Header />
          </Route>
        </Switch>

        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

