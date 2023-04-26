import {useState} from 'react';
import './App.css';

function App() {

  const [name,setName] = useState(' ')


  function handleChange(event){
    setName(event.target.value) 
  }

  function handleClick (){
    setName()
  }
  return (
    <div className="App">
      


      <input onChange={handleChange}placeholder="Add Your Name"/>
    <button onClick={handleClick}>Submit</button>

    <h2>My name is {name}</h2>
    </div>
  );
}

export default App;
