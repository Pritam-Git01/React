
import { useState, useEffect } from "react";

export default function DogData() {
   


    const [data, setData] = useState("")
    
   
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((data) => data.json())
            .then((response) => setData(response.message))
            .catch((error => console.log(error)))
    },[])

    return (
        <img src={data} alt="imop"/>
    )
}


 