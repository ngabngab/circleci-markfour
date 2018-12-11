import React, { Component, Fragment } from 'react';


export default class InputComponent extends Component {

    submit = (e) => {
        e.preventDefault()
        this.props.onSubmit()
    }

    render() {
        return (
            <Fragment>
                <div className="d-flex p-4 flex-column bg-blue">
                    <h2 className="color-white">Simplify Your URL Link</h2>
                    <form className="d-flex">
                        <div className="form-group m-0 w-50">
                            <input type="text" className="form-control" placeholder="Enter Your URl" value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)} />
                        </div>
                        <button className="btn btn-primary text-uppercase ml-3" onClick={this.submit}>shorten url</button>

                    </form>
                    <span className="mt-2 color-white">All goo.gl URLs and click analytics are public and can be accessed by anyone</span>
                </div>
            </Fragment>
        )
    }
}
