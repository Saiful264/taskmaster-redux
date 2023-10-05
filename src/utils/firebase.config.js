import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCtLQoRaMMZxf5Rsz1szNgMqtloq6BJXPs",
  authDomain: "task-master-1b881.firebaseapp.com",
  projectId: "task-master-1b881",
  storageBucket: "task-master-1b881.appspot.com",
  messagingSenderId: "825932954478",
  appId: "1:825932954478:web:8d935a2c968771f853df7f"
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
