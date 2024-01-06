import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCkvtVtZepewiu-o9xq26koK9NJA8ZAAPs",
  authDomain: "task-master-e7929.firebaseapp.com",
  projectId: "task-master-e7929",
  storageBucket: "task-master-e7929.appspot.com",
  messagingSenderId: "106117029161",
  appId: "1:106117029161:web:d1fd6fc7288c42cef9eb38"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
