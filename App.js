import { ref, set } from 'firebase/database';
import { useState } from 'react';
import './App.css';
import { firebaseAuth, firebaseDatabase } from './packet/firebasehandler';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

function App() {

  const [userInput, setUserInput] = useState({emailID:'', password:""})

  const handleClick = async ( ) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, userInput.emailID, userInput.password);
      alert("Account Created")
    }catch(err) {
      alert(err);
    }
    }

    const handleChange = (event) => {
      const {name, value} = event.target;
      setUserInput({
        ...userInput,
        [name]: value
      })
    }
    return (
     <div className='App'>
      <input placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange}/>
      <input placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>


      <button onClick={handleClick()}>upload</button>
    </div>
  

    );
      
  }
  export default App;

