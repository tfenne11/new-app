import React, {useState, useEffect} from "react";
import {auth} from "../../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { Course } from "/Users/tfennell/react-app/new-app/src/components/Homepage.jsx";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [authUser, setAuthUser] = useState(null);


  
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user);
                setShowForm(false);
            }else{
                setAuthUser(null);
                setShowForm(true);
            }
        });

        return () => {
            listen();
        }

    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("sign out sucessful");
        }).catch(error => console.log(error))
    }
   

    const formHandle = (e) =>{
        e.preventDefault();
        console.log(email);
        signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
        }).catch((error) => {
            window.alert(error);
        })
    }

    return( 
        <div className="auth-form-container">
        <>
        {showForm ? 
        <div>
            <h1 className="title"> Tuseme Kiswahili</h1>
            <form className = "log-in-form" onSubmit={formHandle}>
                <label htmlFor="email"> Email </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password"> Password </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
                <button className = "log-in-btn" type="submit"> Sign In</button>
            </form>
        </div>
        : null}
        {showForm ? 
            <button className = "lnk" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here.</button>
        : <Course courseTitle = {props.courseTitle} courseName={props.courseName}/>}
        <div className='sign-out'>{authUser ? <> <div className="fixer"><p>{`Signed in as: ${authUser.email}`} </p></div><div className="fixer"> <button className='sign-out-btn' onClick={userSignOut}> Sign Out </button></div></> :<div className="sgn-fixer"><p>Signed Out</p> </div>}</div>
        </>
        </div>
    );
        }
