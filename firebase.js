import * as firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from './firebase-log';

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID
};

// Check if there is already a firebase instance.
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// Get a reference to the database service
const database = firebase.database();

// Set up Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// Firebase does not support arrays, so take the data from Firebase
// and create a new array to export to the Search component.
const breweriesList = database
  .ref('breweries')
  .once('value')
  .then((snapshot) => {
    const breweries = [];

    // childSnapshot gives you access to each element in the breweries object
    snapshot.forEach((childSnapshot) => {
      breweries.push({
        ...childSnapshot.val()
      });
    });

    return breweries;
  });

export {
  auth, firebase, provider, breweriesList as default
};
