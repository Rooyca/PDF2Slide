import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import axios from 'axios';
import router from './router';

const firebaseConfig = {
  apiKey: "AIzaSyBkgVPszq1aDccHii9gekYAbRaQKjy-7Dw",
  authDomain: "withfirebase-d60f9.firebaseapp.com",
  projectId: "withfirebase-d60f9",
  storageBucket: "withfirebase-d60f9.appspot.com",
  messagingSenderId: "994578814994",
  appId: "1:994578814994:web:54dd16f292ab6d280460cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { addDoc, collection } from "firebase/firestore";

/*
axios.get('https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location')
.then(res => {
    addDoc(collection(db, "visitor"), {'data':res.data, 'time': new Date()});
})
.catch(err => {
  console.log(err)
})
*/

createApp(App).use(router).mount('#app')
