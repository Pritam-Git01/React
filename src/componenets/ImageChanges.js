import './ImageChanges.css'
import { useState } from 'react'
import axios from 'axios'




export default function ImageChanges(){
    const [img,setImg] = useState('https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg')

async function handleClick (){

    // const response = await fetch('https://dog.ceo/api/breeds/image/random')
    // const data = await response.json()
    // setImg(data.message)
    try{

    
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(response.data.message)
    setImg(response.data.message)
    }
    catch(error){
        console.log(error)
    }

}
// useEffect ( () => {
//      axios.get('https://dog.ceo/api/breeds/image/random')
//     .then(response => console.log(response.data.message))
//     .catch(error => console.log(error))
//     setImg(response.data.message)

// // },[])

    return (
        <div>
        <img src={img} alt='dog pic'/>
        <button onClick={handleClick}> Get More</button>

        </div>

    )
}