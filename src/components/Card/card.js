import './card.css'

export default function  Profile (props){

    const {
        image,
        design,
        name,
        desc

    } =  props.userDetail

    function handleClick(){
        alert(name)
    }
    return (
        <div className='wraper'>
        <img className='pic' src={image} alt='pic'/>
        <h4>{design}</h4>
        <h2>{name}</h2>
        <p>{desc}</p>
        <button style= {props.styleBtn} onClick={handleClick}> See More</button>
        </div>
    )
}



