import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
function startFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyD-yvrIA_WwEA6xF7qlsczYFaR7DbIEwVI",
    authDomain: "leg-builder-feature.firebaseapp.com",
    databaseURL: "https://leg-builder-feature-default-rtdb.firebaseio.com",
    projectId: "leg-builder-feature",
    storageBucket: "leg-builder-feature.appspot.com",
    messagingSenderId: "955723441366",
    appId: "1:955723441366:web:8001f0f4a2130913d79577",
  };
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
// Export firestore database
// It will be imported into your react app whenever it is needed
export default startFirebase;
