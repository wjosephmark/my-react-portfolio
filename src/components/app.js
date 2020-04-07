import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from "./portfolio/portfolio-container"
import NavigtationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigtationContainer />
            {/* <PortfolioContainer /> */}

            <Switch>
              <Route exact path ='/' component={Home} />
              <Route path ='/about-me' component={About} />
            </Switch>
          </div>
        </Router>

        <h1>Joseph Mark Portfolio</h1>

        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
