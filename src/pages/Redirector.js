import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import Error404 from './Error404'

export default class Redirector extends Component {
    state = {
        loading: true,
        found: false,
        url: '',
        shortLink: ''
    }
    constructor(props) {
        super(props)
        this.state.shortLink = this.props.computedMatch.params.shortlink
    }

    componentDidMount = () => {
        // TODO get link from firebase
        // firebase.get(this.state.shortLink)

        console.log(this.state.shortLink)
    }

    render() {
        return (
            <Route render={
                props => this.state.loading ? <div>loading</div> : (this.state.found ? <div>Redirecting</div> : <Error404 />)
            } />
        )
    }
}
