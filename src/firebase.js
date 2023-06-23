import firebase from 'firebase';

const firebaseConfig = {

    apiKey: "AIzaSyBwJZuyp-rqiudYrltrohvhcg486DMufk4",
    authDomain: "portal-cliente-b0b8b.firebaseapp.com",
    projectId: "portal-cliente-b0b8b",
    storageBucket: "portal-cliente-b0b8b.appspot.com",
    messagingSenderId: "1026052045580",
    appId: "1:1026052045580:web:0113bcd7b2496caf98e729"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const storage = firebase.storage();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, storage };
