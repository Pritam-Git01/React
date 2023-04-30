import {useState} from "react";

export default function Array (){
    const a = [1,2,3,4];

    const[arr,setArr] = useState(a)
    const handleSubmit =  () => setArr([...arr,Math.floor(Math.random() * 60 )]) 
        
    

    
    return (
        <div>

        <ol>{arr.map(number =>  <li>{number}</li>)  }</ol>
        <button onClick={handleSubmit}>Click Here </button>

        </div>
    )
}