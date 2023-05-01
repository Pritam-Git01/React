

import {useRef} from "react";
import  './useref.css';








export default function UseRefs(){
   
    const inputRef = useRef(null)

    function handleClick (){
        inputRef.current.click()
    }
    return (

        <div className="wraper">

        <h2>For select Files click on Go to File Button</h2>
        <input type="file" ref={inputRef}/>
        <button className="btn" onClick={handleClick}>Go to File</button>

        </div>
    )
}