import React from 'react';
import './App.css';
import Hello from './hello';

function App({name, age , image}) {
  return <div>
    Hello React World From = {name} age = {age + 2} , added 2 in age <br/><br/> <img src={image} alt="nature"/>.
    <br/>
    <Hello firstName={name} ></Hello>

  </div>
   
  
}

export default App;