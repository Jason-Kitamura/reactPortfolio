import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact  from './components/Contact'


  function App() {
    return (
      <Router>
        <div className="App">
          <Header className="Header"/>
          <Navigation className="Navigation"/>      
          <content id="content">
            <Switch>
              <Route path = "/portfolio" component={Portfolio}/>
              <Route path = "/contact" component={Contact}/>
              <Route path = "/reactPortfolio" component={AboutMe}/>
              <Route path = "/" component={AboutMe}/>
            </Switch>
          </content>
        </div>
      </Router>
    );
  }


export default App;
