import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";
import Error404 from './Error404'
import Loader from '../components/LoaderComponent'
import {getItem} from '../firebase_functions'

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
        getItem(this.state.shortLink, (item) => {
            if (item != null) {
                window.location = item.link
            } else {
                this.setState({
                    loading: false,
                    found: false
                })
            }
        })
    }

    render() {
        return (
            <Route render={
                props => this.state.loading ? <Loader /> : (this.state.found ? <div /> : <Error404 />)
            } />
        )
    }
}
