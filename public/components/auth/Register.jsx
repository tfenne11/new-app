import React, {useState} from "react";
import {auth, writeData} from "../../firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const data = ["Beginning Swahili I","Beginning Swahili II", "Intermediate Swahili III", "Intermediate Swahili IV", "Advanced Swahili"];
    

    const formHandle = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(course);
        writeData(name,course);
        createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
            props.onFormSwitch('login');
            props.getCourse(course);
            console.log(course);
            console.log(course);
        }).catch((error) => {
            window.alert(error);
        })
    }

    return(
        <div className="auth-form-container">
        <>
        <h1 className="title"> Tuseme Kiswahili</h1>
            <form className="register-form" onSubmit={formHandle}>
            <label htmlFor="name"> Name </label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Full Name" id="name" name="name"/>
            <label htmlFor="email"> Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label htmlFor="password"> Password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
            <label htmlFor="course"> Course: </label>
            <select value={course} onChange={(e) => {
                props.getCourse(e.target.value);
                setCourse(e.target.value);
            }} type="course" name="course"  id="course">
                {
                    data.map(opt=><option key={opt}>{opt}</option>)
                }
            </select>
            <button className = "log-in-btn" type="submit"> Sign Up</button>
            </form>
            <button className = "lnk" onClick={() => props.onFormSwitch('login')}> Already Have an Account? Log in here. </button> 
        </>
        </div>
    )
}



