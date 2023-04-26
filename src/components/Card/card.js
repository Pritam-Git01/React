import './card.css'

export default function Product ({productDetails,styleProduct}){

    const {
    productId,    
    productPic ,
    productName ,
    Brand ,
    productDescription  ,
    Price ,
    Rating 

    } = productDetails

    function handleClick (){
        alert(`Product of is ${productId},which is ${productName} of brand ${Brand} has of ruppees ${Price} is added in the cart, please procced to pay !!!`)
    }

    return (

        <div className='wraper'>
   
            <img className='pic' src={productPic} alt='pic'/>
           
            <h4>{Brand}</h4>
            <p>{productDescription}</p>
            <h4>{Price}</h4>
            <p>{Rating}</p>
            <button style = {styleProduct}onClick={handleClick}>ADD TO CART</button>

        </div>
    )

    
}



