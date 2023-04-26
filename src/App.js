import {useState} from "react";
import './App.css';

function App() {

  const[count,setCount] = useState(0)

  function add(){
    setCount(count + 1)
  }
  function subtract(){
    setCount(count-1)
    if(count === 0){
      setCount(0)
    }
  }
  return (
    <div className="App">
    
    <h2>Count is : {count}</h2>
    <button className='first'onClick={add}>Increase</button>
    <button className='second'onClick={subtract}>Decrease</button>
       
    </div>
  );
}

export default App;
