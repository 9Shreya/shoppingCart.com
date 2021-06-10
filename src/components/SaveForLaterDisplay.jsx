import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios'
import { removeSaveLaterproduct,setAddCart } from '../redux/action/ActionType';
function SaveForLaterDisplay(data)
{
    console.log(data.data);
    const { id,title,category,image,price } =data.data
      let cartProduct = useSelector(state => state.productReducerAddCart.product)
    console.log(cartProduct); 
    const setAddCartProduct = async(id) =>
    {
       const data = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => console.log(err))

       cartProduct= [...cartProduct,data.data]
    
        dispatch(setAddCart(cartProduct))
      deletProduct(id)
    }

 const products = useSelector(state => state.productReducerSaveForLater.product)
    console.log(products);
    
    const dispatch = useDispatch();

    const deletProduct = (id) =>
    {
        let reee = products.filter(beforeid => beforeid.id === id)
            console.log(reee);
            if(reee.length > 0)
            {
                let value=products.indexOf(reee[0])
                products.splice(value,1) 
                 dispatch(removeSaveLaterproduct(products))
            }
    }
    console.log(data);
   return (
           <div className='container' style={{marginTop:'10px'}}>
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
                    <Tooltip title="Delete from Save for later" aria-label="add">
                            <DeleteIcon style={{ position: 'absolute',right: '10px',top:'20px' }} onClick={() => { deletProduct(id); data.wishlistErrorClick() }} />
                    </Tooltip>
                    <Tooltip title="Move To Cart" aria-label="add">
                            <ShoppingCartIcon style={{ position: 'absolute',right: '10px',bottom: '15px' }} onClick={()=>{data.addCart();setAddCartProduct(id)}} />
                   </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default SaveForLaterDisplay
