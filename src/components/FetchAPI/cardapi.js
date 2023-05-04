
// { 
//     "id": 1, 
//     "email": "george.bluth@reqres.in", 
//     "first_name": "George", 
//     "last_name": "Bluth", 
//     "avatar": "https://reqres.in/img/faces/1-image.jpg"
//      }
    
import './cardapi.css'

 function Card({userDetails}){

    const {
        id,
        avatar,
        email,
        first_name,
        last_name

    } = userDetails

    return (
        <div className="users">
            <p>{id}</p>
            <img src={avatar} alt="users-Img"></img>
            <p>{email}</p>
            <p>{first_name}</p>
            <p>{last_name}</p>
        </div>
    )

    
}

export default Card;