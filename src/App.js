import React, { Component } from 'react';
import HeaderComponent from "./component/HeaderComponent";
import InputComponent from './component/InputComponent'

class App extends Component {
  render() {
    return (
      <div>
          <HeaderComponent />
          <InputComponent />
      </div>
    );
  }
}

export default App;
