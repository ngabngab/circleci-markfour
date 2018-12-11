import React, { Component, Fragment } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export default class ShortenComponent extends Component {
  state = {
      copied : false
  }


  onCopy = () => {
    this.setState({copied: true});
  }




  render() {
    return (
      <Fragment>
          <div className="d-flex justify-content-center flex-column">
              
            <div className="d-flex p-4 justify-content-center">
                    <div className="form-group m-0 align-self-center">
                        <span>{ this.props.shortUrl }</span>
                    </div>
                    <CopyToClipboard text={ this.props.shortUrl } onCopy={(e) => this.onCopy(e)}>
                        <button className="btn btn-primary mr-1 ml-4">Copy</button>
                    </CopyToClipboard>
                    <a target="_blank" href={ this.props.shortUrl } className="btn btn-secondary mx-1">Go</a>
            </div>
            <div className="align-self-center">
            {
                    this.state.copied === true ? <h5 className="mt-4">Copied</h5> : ''
            }
            </div>
          </div>
      </Fragment>
    )
  }
}
