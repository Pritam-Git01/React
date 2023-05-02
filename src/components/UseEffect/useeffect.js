

import{ useState,useRef} from 'react';

export default function ChangeImg(){

   const arr = ['https://thumbs.dreamstime.com/b/silhouette-tree-grass-bird-pink-purple-sky-cloud-background-89819435.jpg',
                'https://st.depositphotos.com/2680101/3171/i/450/depositphotos_31714403-stock-photo-ree-in-the-shape-of.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmh714GKPAmhPUotPZoGF-WHr7RJE52cVto_Mz46t2JuEtPZSmMUA4U3up2aRjHEkYDI&usqp=CAU',
                'https://www.shutterstock.com/image-photo/boat-tree-sunset-260nw-1770893537.jpg']
    
     const [currentImgIdx, setCurrentImg] = useState(0)

    const inputRef = useRef(null)
    

    function handleClick (){
        setCurrentImg(
          (currentImgIdx + 1) % arr.length
        )
         inputRef.current.src = arr[currentImgIdx]
        
        
    }
    return (
        <div >
            <img src={arr[0]} alt='op' ref={inputRef}/>
            
            <button style={{margin:'60px'}}onClick={handleClick}> Change Image</button>
        </div>

    )
}