
import {useState} from "react";
import './button.css';


export default function Button(){

    const guessedNumber = (Math.floor(Math.random()* 10 ) + 1)

    const[num,setNum] = useState('')
    const [count, setCount] = useState(0)
    
    function handleChange(event){
        setNum(event.target.value)
        

    }


    const  handleSubmit = (event) => {
        event.preventDefault();
        

        if(!num ){
            alert('Please enter a Number')
            return;
        }
        else {
            setCount(count + 1)
        }
            if(num < guessedNumber){
                alert('You guessed less number than this')
                return
            }
            if(num > guessedNumber){
                alert('You guessed greater number than this ')
                return
            }
            if(num == guessedNumber){
                alert(`Yay! You guessed it right in ${count + 1} attempts`)
                return
            }
    
            
        
        }
        
       
    return (
        <div className="game">
        
        <h2 className="heading">Guess the Number between 1 to 10</h2>
        <input className="input" onChange={handleChange} placeholder="Guess the number" type="number" />
        <button className="btn" onClick={handleSubmit}>Match Number </button>
        
        </div>
    )
}