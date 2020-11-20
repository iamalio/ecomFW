import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyAnSVDwvuUMa1Nv-4hmVulrmHwaZMJAagM",
    authDomain: "fishwrangler-life.firebaseapp.com",
    databaseURL: "https://fishwrangler-life.firebaseio.com",
    projectId: "fishwrangler-life",
    storageBucket: "fishwrangler-life.appspot.com",
    messagingSenderId: "320600915368",
    appId: "1:320600915368:web:196f3677a91a7894eef19d",
    measurementId: "G-20T51HCFVG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };