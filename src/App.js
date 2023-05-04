
import './App.css';
import Card from './components/FetchAPI/cardapi';
import { useState } from "react";


function App() {

  const [userDetails, setUserDetails] = useState([])



  async function handleClick() {
    // fetch('https://reqres.in/api/users/')
    // .then(data => data.json())
    // .then(response => console.log(response))
    // .catch(error =>console.log(error))

    try {
      const data = await fetch('https://reqres.in/api/users/')
      const response = await data.json()
      setUserDetails(response.data)



    }
    catch (error) {
      console.log(error)
    }


  }
  return (
    <div className="App">

      <div className='wraper'>
        {userDetails.map((userDetails => <Card userDetails = {userDetails}/>))}
      </div>


      <button onClick={handleClick}> Get More</button>

    </div>
  );
}

export default App;
