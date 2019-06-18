import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const API_KEY = `${process.env.REACT_APP_FIREBASE_API_KEY}`

const firebaseApp = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: "boite-a-recettes-40c44.firebaseapp.com",
  databaseURL: "https://boite-a-recettes-40c44.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
