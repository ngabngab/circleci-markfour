import React from 'react'

import firebaseApp from '../firebase';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] }; // <- set up react state
  }

  componentWillMount() {
    let itemsRef = firebaseApp.database().ref().orderByKey().limitToLast(100);
    itemsRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let item = { link: snapshot.val(), id: snapshot.key };
      this.setState({ items: [item].concat(this.state.items) });
    })
  }

  addItem(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    firebaseApp.database().ref().push().set({
      link: this.inputEl.value,
      shortenlink: this.inputEl.value + '#',
    });
    this.inputEl.value = ''; // <- clear the input
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addItem.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { /* Render the list of messages */
              this.state.items.map( item => (
                <div key={item.id}>
                  <a href={item.link.shortenlink} >{item.link.link + ' as ' + item.link.shortenlink}</a>
                </div>
              ))
            }
          </ul>
        </form>
      </div>
    )
  }
}

export default Sample;
