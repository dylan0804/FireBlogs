import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIkB5MAdvHfGGprZrGCtWXi0oCEjUrNEA",
    authDomain: "fireblogs-fbd7f.firebaseapp.com",
    projectId: "fireblogs-fbd7f",
    storageBucket: "fireblogs-fbd7f.appspot.com",
    messagingSenderId: "840963729068",
    appId: "1:840963729068:web:bfd3c919a77e4d31f9a109"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();