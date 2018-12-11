import React, { Component } from 'react';
import bg404 from '../assets/img/bg404.svg'

export default class Error404 extends Component {
  render() {
    return (
      <div className="container-error">
          <div className="container-error-bg w-100 text-center">
              <img src={bg404} />
          </div>
      </div>
    )
  }
}
