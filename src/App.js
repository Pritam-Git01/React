
import './App.css';
import Product from './components/Card/card';


function App() {
  
  
  const productOne = {
    productId : '1',
    productPic : 'https://images.pexels.com/photos/12725050/pexels-photo-12725050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    productName : 'Shoes',
    Brand : 'Nike',
    productDescription : 'It is Nike Jordon 1' ,
    Price : '60$',
    Rating : 'Rating -> 4'
 
  }
  const productTwo = {
    productId : '2',
    productPic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluEfQ9k35uzP_nnshpmNQvf9TPK_4teQM4A&usqp=CAU',
    productName : 'T-shit',
    Brand : 'Allen Solly',
    productDescription : 'Cotton Round T-shirt' ,
    Price : '20$',
    Rating : 'Rating -> 4'
 
  }
  const productThree = {
    productId : '3',
    productPic : 'https://staticimg.titan.co.in/Helios/Catalog/KCWGG2106304MN_1.jpg?impolicy=pqmed&imwidth=640',
    productName : 'Watch',
    Brand : 'Titan',
    productDescription : 'Analog Watch Men' ,
    Price : '40$',
    Rating : 'Rating -> 4'
 
  }
  
 const style = {
  backgroundColor: 'orange'
 }
 const style2 = {
  backgroundColor: 'pink'
 }
 const style3 = {
  backgroundColor: 'Wheat'
 }
  
  
 
  
  return (
    <div className="App">
      <div><Product 
      productDetails={productOne}
      styleProduct={style}/></div>

      <div><Product 
      productDetails={productTwo}
      styleProduct={style2} /></div>
     
      
      <div><Product
       productDetails={productThree}
       styleProduct={style3}
       /></div>
      
      
     
      
      
      
    </div>
  );
}

export default App;
