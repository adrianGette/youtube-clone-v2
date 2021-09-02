// import firebase from 'firebase/app'
// import 'firebase/auth'

import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

   firebase.initializeApp(firebaseConfig);

 export default firebase.auth();