import firebaseApp from './firebase'

export function getItem (shortenlink, callback) {
  let test = firebaseApp.database().ref().orderByChild('shortenlink').equalTo(shortenlink);
  test.once('value').then(snapshot => {
    // console.log(snapshot.val())
    let items = []
    for (let [key, value] of Object.entries(snapshot.val())) {
      items.push({...value, id: key})
    }
    callback(items ? items[0] : null)
  })
  .catch(e => {
    callback(null);
  });
}

export function addItem (link, shortenlink) {
  firebaseApp.database().ref().push().set({
    link: link,
    shortenlink: shortenlink,
  });
}
