import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBTIrdtlkc14eb2krRy_qYr6m_HWKK_sU8",
    authDomain: "facebook-messenger-clone-38332.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-38332.firebaseio.com",
    projectId: "facebook-messenger-clone-38332",
    storageBucket: "facebook-messenger-clone-38332.appspot.com",
    messagingSenderId: "851314800985",
    appId: "1:851314800985:web:c9f045acf83fbcb2d2b448",
    measurementId: "G-QNWTVLFEQ9"
}) ;

const db = firebaseApp.firestore();
export default db;