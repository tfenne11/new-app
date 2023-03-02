import React, {useState} from "react";
import './App.css';
import {Login} from "./components/auth/Login";
import {Register} from "./components/auth/Register";





const App = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const [course, setCurrentCourse] = useState('');


  return (
    <div className="App">
      <title>Tuseme Kiswahili</title>
      
      {
        currentForm === "login" ? <Login courseName = {course} onFormSwitch = {setCurrentForm}/> : <Register getCourse = {setCurrentCourse} onFormSwitch = {setCurrentForm}/>
      }
      <div className="f-nav"></div>
    </div>
  );
}

export default App;
