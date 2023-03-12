import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA-TAtx3CE7VZw4sSHuq8lxq1JXIPdW3Ho",
  authDomain: "libraryapp-339fd.firebaseapp.com",
  projectId: "libraryapp-339fd",
  storageBucket: "libraryapp-339fd.appspot.com",
  messagingSenderId: "318079977529",
  appId: "1:318079977529:web:cc1403ac906e12406d25e8"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
