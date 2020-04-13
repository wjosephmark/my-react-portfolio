import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioContainer from "./portfolio/portfolio-container"
import NavigtationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Blog from "./pages/blog"
import PortfolioDetail from "./portfolio/portfolio-detail"
import NoMatch from "./pages/no-match"
import axios from 'axios';

export default class App extends Component {
  render() {
    
    return (
      <div className='container'>

        <h1>Joseph Mark Portfolio</h1>

        <Router>
          <div>
            <NavigtationContainer />
            {/* <PortfolioContainer /> */}

            <Switch>
              <Route exact path ='/' component={Home} />
              <Route path ='/about-me' component={About} />
              <Route path ='/blog' component={Blog} />
              <Route path ='/contact' component={Contact} />
              <Route path ="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
