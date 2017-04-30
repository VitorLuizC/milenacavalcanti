import { initializeApp } from 'firebase'

let application = null

export default application = initializeApp({
  apiKey: "AIzaSyC1BCkuRhkaaWmJ7h1UjZEHDvfxsQUTEto",
  authDomain: "milenacavalcanti-1b8d2.firebaseapp.com",
  databaseURL: "https://milenacavalcanti-1b8d2.firebaseio.com",
  projectId: "milenacavalcanti-1b8d2",
  storageBucket: "milenacavalcanti-1b8d2.appspot.com",
  messagingSenderId: "694457055184"
})

export const authentication = application.auth()
