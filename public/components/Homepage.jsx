import React, {useEffect, useState} from "react";
import { getData } from "../firebase";


export const Course = (props) =>{
  useEffect(() => {
    getData()
    console.log(getData());
  })
  const [courseTitle, setCourseTitle] = useState('');
  console.log(courseTitle);

  useEffect(() => {
    let data = getData();
    console.log(data)
    setCourseTitle(data)
  }, [])
  console.log(courseTitle);

  return(
    <div>
      <div className="nav"> 
      <nav id="top-bar"> </nav>
      <h1 className="title"> Tuseme Kiswahili </h1>
      <h1> {props.courseName}</h1>
      <h2> Utangulizi (Introduction)  </h2>
      <div> </div>
      <p>Matamshi (Pronunciation) 

Learn how to pronounce words in Kiswahili.  Welcome to the wonderful world of Kiswahili! 

First things first, it’s not ‘’Swahili.'’ It’s “Kiswahili,” so get used to calling it that! 

Kiswahili sounds are relatively straightforward, etc. </p>
<h3>Vokali (Vowels) </h3>
<p>/a/ as in jar</p> 
<p>•	Mama  </p>
<p>•	Baba </p>
<p>•	Dada  </p>
<p>•  Kaka  </p>
<p> Mama, baba, dada, na kaka. </p>
<p>/e/ as in egg </p>
<p>•	Wewe</p>
<p>•	Yeye</p>
<p>•	Embe</p>
<p>•	Mpe</p>
<p>Wewe mpe yeye embe. </p>
<p>/i/ as in bee </p>
<p>•	Mimi</p>
<p>•	Bibi</p>
<p>•	Keki</p>
<p>•	Sili</p>
<p>Mimi sili keki ya bibi. </p>
<p>/o/ as in order </p>



<h2> {courseTitle} </h2>
      
    </div>
    </div>
  );
}

  
