import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCazbBPTSbLA2TLiJxTguVCfitxDfrCeLc",
    authDomain: "twitter-clone-v-51cdc.firebaseapp.com",
    projectId: "twitter-clone-v-51cdc",
    storageBucket: "twitter-clone-v-51cdc.appspot.com",
    messagingSenderId: "821987498731",
    appId: "1:821987498731:web:33285f7635dee65c44bcae",
    measurementId: "G-776JQHYM37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
