import React, { Component, Fragment, Suspense } from 'react';

import './App.css';
import Generator from './utility/ShortGenerator'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Redirector from './pages/Redirector'

const HomePage = () => <Home />

class App extends Component {
  state = {
    url: ''
  }
  constructor(props) {
    super(props)
    this._generator = new Generator()
  }

  onGenerateBtnClicked = () => {
    this.save(this.state.url, this._generator.generate())

  }

  onTextChanged = ({ target: { value } }) => {
    this.setState({ url: value })
  }

  save = (url, shorturl) => {

  }

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
