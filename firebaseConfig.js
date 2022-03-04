import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuIYD514OC6sU4mIkD_YrrM1MsbogwpS8",
  authDomain: "login-auth-11c68.firebaseapp.com",
  databaseURL: "https://login-auth-11c68-default-rtdb.firebaseio.com",
  projectId: "login-auth-11c68",
  storageBucket: "login-auth-11c68.appspot.com",
  messagingSenderId: "1092596368709",
  appId: "1:1092596368709:web:c856af2e973b9059f86a2c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;