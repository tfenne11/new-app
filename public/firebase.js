import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set} from "firebase/database";




const firebaseConfig = {
    apiKey: "AIzaSyBUCepdRTseZTjM1SI7DBtfH6hRN2Fydho",
    authDomain: "tuseme-kiswahili-b6424.firebaseapp.com",
    databaseURL: "https://tuseme-kiswahili-b6424-default-rtdb.firebaseio.com/",
    projectId: "tuseme-kiswahili-b6424",
    storageBucket: "tuseme-kiswahili-b6424.appspot.com",
    messagingSenderId: "781352720053",
    appId: "1:781352720053:web:773de68fdf484b870890fc"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getDatabase();
  
  
  export function writeData(name, courseTitle){
    const reference = ref(db, "users/");
    set(reference, {
      Course: courseTitle,
      Name: name
    });
  };


  export function getData(){
    const reference = ref(db, "users/");
        onValue(reference, (snapshot) => {
          const data = snapshot.val();
          if(data.Course !== undefined){
            console.log(`${data.Course}`);
          }
          return data.Course;
          }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
          });
  }




  



  


 
  
