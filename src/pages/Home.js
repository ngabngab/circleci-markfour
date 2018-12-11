import React, { Component } from 'react'
import Generator from '../utility/ShortGenerator'
import Header from '../components/HeaderComponent'
import Input from '../components/InputComponent'

import {addItem} from '../firebase_functions'
import ShortenComponent from '../components/ShortenComponent';

class Home extends Component {
    state = {
        url: '',
        generated: false,
        shortUrl: ''
    }

    constructor(props) {
        super(props)
        console.log(props)
        this._generator = new Generator()
    }

    onGenerateBtnClicked = () => {
        const shortenUrl = this._generator.generate()
        this.save(this.state.url, shortenUrl)
        this.setState({url: "", generated: true, shortUrl: `${window.location.origin}/${shortenUrl}`})
    }

    onInputChanged = (value) => {
        this.setState({ url: value })
    }

    save = (url, shorturl) => {
        addItem(url, shorturl);
    }

    render() {

        return (
            <div>
                <Header />
                <Input onChange={this.onInputChanged} value={this.state.url} onSubmit={this.onGenerateBtnClicked} />
                {
                    this.state.generated && 
                    <ShortenComponent shortUrl={ this.state.shortUrl }/>
                }
            </div>
        )
    }
}

export default Home
