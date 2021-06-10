import React, { useState } from 'react'
import Heart from "react-animated-heart";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setWishlist,removeSelectedIDMain,setAddCart } from '../redux/action/ActionType';
import axios from 'axios';

let arrayWishlistIds=[]

function ProductHeartCopm(product)
{
         const dispatch = useDispatch()
    const addtoWishlist =async (id) =>
    {
        if(arrayWishlistIds.length > 0)
        {
            let reee = arrayWishlistIds.filter(beforeid => beforeid.id === id)
            console.log(reee);
            if(reee.length > 0)
            {
                let value=arrayWishlistIds.indexOf(reee[0])
                arrayWishlistIds.splice(value,1) 
                product.wishlistErrorClick()
                 dispatch(removeSelectedIDMain(arrayWishlistIds))
            }
            else
            {
const data=  await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>console.log(err))

              arrayWishlistIds = [...arrayWishlistIds,data.data] 
            }
        } else
        {
const data = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => console.log(err))

                   arrayWishlistIds= [...arrayWishlistIds,data.data]
    }
        dispatch(setWishlist(arrayWishlistIds))
        
  }
 let arrayAddCartproduct = useSelector(state => state.productReducerAddCart.product)
    //  console.log(arrayAddCartproduct);
        const addtoCart =async (id) =>
    {
      
const data = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => console.log(err))

                   arrayAddCartproduct= [...arrayAddCartproduct,data.data]
    
        dispatch(setAddCart(arrayAddCartproduct))
        
  }
    
    const { id,image,category,title,price } = product.product

// console.log(product);
    const [isClick,setClick] = useState(false);
        const [isClicked,setClicked] = useState(true);
if(product.val!==undefined){
    // if(product.val.length>0){
    //     setClick
    // }
}
    const jhgjhd = () =>
    {
        if(isClicked === isClick)
        {
        setClicked(!isClicked)    
        }
   

    }
// console.log(product.val);
    return (
      
          <div  className='card 'key={id} style={{margin:'auto',marginTop:'10px',marginBottom:'10px'}}>
            <Link  to={`/productDetail/${id}` } style={{ color: 'inherit', textDecoration: 'inherit',}}>
               
           <div style={{marginLeft:'9px',marginBottom:'9px' }} >
                    <div className="image">
                        <img style={{width: '150px',height:'200px',marginLeft: '21%',padding:'8px'}} src={image} alt='' height='200px'/>
               </div>
               
                    <div className="content">
                        <h5 className="">{title.slice(0,25)} </h5><br />
                        <div style={{ display: "flex" }}>
                            <div style={{    width: '50%'}}>
                    <div className="meta">$ {price}</div>
                    <div className="description ">{category}</div> 
                    </div>
                 
                        </div>
                    </div>
               </div>
            </Link>
            <button className="ui google plus button right floated" style={{
                position: 'absolute',
                bottom: '21px',
                width: '43%',
                left: '53%'
            }} onClick={()=>{ product.addCart(); addtoCart(id) }}>
                                Add to Cart
                    </button>
            {product.val!==undefined?product.val.length === 0 ?
                <div className="heart"  onClick={product.wishlistClick}>
                <Heart isClick={isClick} onClick={() => {  addtoWishlist(id) ;{isClicked!==isClick?setClick(!isClicked):setClicked(!isClicked)};}} />  
                </div>
                :  <div className="heart"  onClick={product.wishlistClick}>
                    <Heart isClick={isClicked} onClick={() => { setClicked(!isClicked);  
                        console.log(isClicked,isClick);
                        addtoWishlist(id);jhgjhd()}} />  
                </div>:<div className="heart"  onClick={product.wishlistClick}>
                    <Heart isClick={isClick} onClick={() => { setClick(!isClick);addtoWishlist(id) }} />  
                </div>}
          
</div>
   
    )
}

export default ProductHeartCopm
