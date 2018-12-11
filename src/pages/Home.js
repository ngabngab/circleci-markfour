import React, { Component } from 'react'
import logo from '../logo.svg';
import Generator from '../utility/ShortGenerator'

class Home extends Component {
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
        // TODO save to firebase
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React Bengs
                    </a>
                </header>
            </div>
        )
    }
}

export default Home