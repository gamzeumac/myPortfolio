import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact'

const Routes = () => {
    return (
<Router>
        <Switch>
            <Route exact path='/'>
                <Header />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/project'>
                <Project />
            </Route>
            <Route path='/skills'>
                <Skills />
            </Route>
            <Route path='/contact' >
                <Contact />
            </Route>
        </Switch>
    </Router>
    )
}

export default Routes;
