import firebase from 'firebase/compat/app';
import { getStorage,ref,
    uploadBytesResumable,
    getDownloadURL  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQd2X-sGGqGFN1IihEeLcFPyeAh9n9myk",
  authDomain: "ionic-test-21bd6.firebaseapp.com",
  projectId: "ionic-test-21bd6",
  storageBucket: "ionic-test-21bd6.appspot.com",
  messagingSenderId: "566741703944",
  appId: "1:566741703944:web:98db88b549970a3a46a0bd"
};



export const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app);
export {ref,uploadBytesResumable,getDownloadURL};
