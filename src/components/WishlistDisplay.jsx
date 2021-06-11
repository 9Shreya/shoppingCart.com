import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import {setAddCart, removeSelectedIDMain } from '../redux/action/ActionType';
import axios from 'axios'
function WishlistDisplay(data)
{
    const products = useSelector(state => state.productReducerIds.product)
    // console.log(products);
    let cartProduct = useSelector(state => state.productReducerAddCart.product)
     console.log(cartProduct); 
    const dispatch = useDispatch();

    const deletProduct = (id) =>
    {
        let reee = products.filter(beforeid => beforeid.id === id)
            console.log(reee);
            if(reee.length > 0)
            {
                let value=products.indexOf(reee[0])
                products.splice(value,1) 
                  dispatch(removeSelectedIDMain(products))
            }
    }
    const setAddCartProduct = async(id) =>
    {
       const data = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => console.log(err))

       cartProduct= [...cartProduct,data.data]
    
        dispatch(setAddCart(cartProduct))
      
    }

 
    // console.log(data);
    const { id,title,category,image,price } =data.data
    
    
//     {
//         category: "men's clothing",
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// id: 1,
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// price: 109.95,
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}

    return (
        <div className='container' style={{marginTop:'10px',  marginBottom: '15px'}}>
            <div className='row'>
                <div className='col-md-8 p-3 row m-auto wishlist' style={{position:'relative'}}>
                    <div className='col-md-3'>
                     <img src={image} alt='imagdde'  height='100px' width='100px'/>
                    </div>
                    <div className='col-md-8'>
                        <h5>{title}</h5><br />
                        <h5 style={{color:'darkgray',textTransform:'capitalize'}}>{category}</h5>
                        <a className="ui teal tag label">$ {price}</a>         
                    </div>
                    <div className='col-md-1 ' style={{color:'darkgray',width:'16%',cursor:'pointer'}}>
                    <Tooltip title="Delete from wishlist" aria-label="add">
                            <DeleteIcon style={{ position: 'absolute',right: '10px',top:'20px' }} onClick={() => { deletProduct(id); data.wishlistErrorClick() }} />
                    </Tooltip>
                    <Tooltip title="Add to cart" aria-label="add">
                            <ShoppingCartIcon style={{ position: 'absolute',right: '10px',bottom: '15px' }} onClick={()=>{setAddCartProduct(id);data.addCart()}} />
                   </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistDisplay
