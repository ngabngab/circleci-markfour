import React, { Component, Fragment } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export default class ShortenComponent extends Component {
  state = {
      shortUrl : this.props.shortUrl,
      copied : false
  }


  onChangeHandler = (e) => {
      this.setState({
            shortUrl : e.target.value,
            copied : false
      })
  }


  onCopy = () => {
    this.setState({copied: true});
  }




  render() {
    return (
      <Fragment>
          <div className="d-flex justify-content-center flex-column">
              
            <div className="d-flex p-4 justify-content-center">
                    <div className="form-group m-0">
                        <input type="text" value={ this.state.shortUrl } className="form-control"  onChange={ (e) => this.onChangeHandler(e) }/>
                    </div>
                    <CopyToClipboard text={ this.state.shortUrl } onCopy={(e) => this.onCopy(e)}>
                        <button className="btn btn-primary mr-1 ml-4">Copy</button>
                    </CopyToClipboard>
                    <a target="_blank" href={ this.state.shortUrl } className="btn btn-secondary mx-1">Go</a>
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
