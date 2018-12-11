import firebaseApp from './firebase'

export function getItem (shortenlink, callback) {
  let test = firebaseApp.database().ref().orderByChild('shortenlink').equalTo(shortenlink).once('value').then(snapshot => {
    if(snapshot.val() === null) return callback(null)
    let items = []
    for (let [key, value] of Object.entries(snapshot.val())) {
      items.push({...value, id: key})
    }
    callback(items ? items[0] : null)
  });
}

export function addLink (link, shortenlink) {
  firebaseApp.database().ref().push().set({
    link: link,
    shortenlink: shortenlink,
  });
}
