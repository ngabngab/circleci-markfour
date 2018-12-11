import React, { Component, Fragment } from 'react';
import avatar from '../assets/img/farmer.svg';
import logo from '../assets/img/voxteneo-logo.png';


export default class HeaderComponent extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light bg-light">
            <div className="d-flex w-50">
                <div className="logo-container p-2">
                    <img src={ logo } />
                </div>
                <h5 className="align-self-center ml-3">Url Shortener</h5>
            </div>
            <div className="w-50">
                <div className="d-flex flex-row-reverse w-100 p-2">
                    <div className="avatar-container mx-4">
                        <img src={ avatar } className="avatar-img"/>
                    </div>
                    <div className="px-4 align-self-center">
                        <a href="#">Login</a>
                    </div>
                    <div className="px-4 align-self-center">
                        <a href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
      </Fragment>
    )
  }
}
