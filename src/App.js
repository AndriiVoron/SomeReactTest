import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomeContainer from './containers/HomeContainer';
import AlbumContainer from './containers/AlbumContainer';
import SinglePictureContainer from './containers/SinglePictureContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
              <Route path='/' exact component={ HomeContainer } />
              <Route path='/album/:id' component={ AlbumContainer } />
              <Route path='/single/:id' component={ SinglePictureContainer } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
