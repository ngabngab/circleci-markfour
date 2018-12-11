import React, { Component, Fragment, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Redirector from './pages/Redirector'

const HomePage = (props) => <Home {...props} />

// import Sample from './components/Sample';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Redirector exact path="/:shortlink" />
            </Switch>
          </Suspense>
        </Fragment>

      </Router>
    );
  }
}

export default App;
