
import './App.css';
import { useState } from "react";
// import axios from 'axios';



function App() {
  const [number, setNumber] = useState('')



  async function handleClick() {
    const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP'
    
    if(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(number)){
      const options = {
        method: "POST",
        headers: {
          'content-type': 'application/JSON'
        },
        body: JSON.stringify({mobile: number})
      }


   
        
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.log(error))
        try{
        const response = await fetch(url, options)
        const data = await (response.json())
        console.log(data)
        }
        catch(error){
          console.log(error)

        } 
        //  axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',options)
        //  .then((response => console.log(response)))
        //  .catch((error => console.log(error)))

    
    } else {
      alert("Please Enter Proper Number")
    }
    
    setNumber(' ')

  }

  return (
    <div className="App">
      <div className='wraper'>
        <input type='number' placeholder="Enter mobile" onChange={(event) => setNumber(event.target.value)} value={number} />
        <button onClick={handleClick}>Get OTP</button>

      </div>
    </div>
  );
}

export default App;
