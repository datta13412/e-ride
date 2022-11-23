import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCw4CRHgLWq54dvR38_Lg90V7E11Su3arU",
  authDomain: "stfu-f5416.firebaseapp.com",
  projectId: "stfu-f5416",
  storageBucket: "stfu-f5416.appspot.com",
  messagingSenderId: "796690165764",
  appId: "1:796690165764:web:6e6eb4de835d6426200551"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
