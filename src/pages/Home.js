import React, { Component } from 'react'
import logo from '../logo.svg';
import Generator from '../utility/ShortGenerator'
import Header from '../components/HeaderComponent'
import Input from '../components/InputComponent'

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
        // TODO save to firebase
    }

    render() {

        return (
            <div>
                <Header />
                <Input onChange={this.onInputChanged} value={this.state.url} onSubmit={this.onGenerateBtnClicked} />
                {
                    this.state.generated && <code><a href={this.state.shortUrl}>{this.state.shortUrl}</a></code>
                }
            </div>
        )
    }
}

export default Home