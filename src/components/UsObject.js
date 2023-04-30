
import {useState} from "react";








export default function Object(){

const person = {
    name : "Shivam",
    age: 25,
    height: 6.0,
    isSmart: true,

}

const [obj,SetObj] = useState(person)
const handleSubmit = () => {
    SetObj({...person, name: "OP"})
}

   
    return (
        <div>
        <h2>{obj.name}</h2>
        <h2>{obj.age}</h2>
        <h2>{obj.height}</h2>
        <h2>{obj.isSmart.toString()}</h2>
        <button onClick={handleSubmit} >Click This</button>
        </div>
    )
}