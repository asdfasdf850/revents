import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDmFqlKX02cpHBUrgsU0b1RyvBI8Amvr90',
  authDomain: 'todoist-9240b.firebaseapp.com',
  databaseURL: 'https://todoist-9240b.firebaseio.com',
  projectId: 'todoist-9240b',
  storageBucket: 'todoist-9240b.appspot.com',
  messagingSenderId: '700650457132',
  appId: '1:700650457132:web:28b47cd519f51c4add6989'
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
