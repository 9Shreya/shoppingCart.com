import React from 'react'
import AddCartDisplay from './AddCartDisplay'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SaveForLAter from './SaveForLAter';
import { setWishlist, setAddCart } from '../redux/action/ActionType';
function Alert(props) {
  return <MuiAlert elevation={1}  {...props} />;
}
function AddCart()
{
const [close, setclose] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
 const addCart = () => {
    setOpenCart(true);
    };

     const wishlistErrorClick = () => {
    setclose(true);
     };
     const wishlistErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setclose(false);
      };
      const addCartClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenCart(false);
    };
    const saveproduct = useSelector(state => state.productReducerSaveForLater.product)
    console.log(saveproduct);
    const product = useSelector(state => state.productReducerAddCart.product)
    // const producddt = useSelector(state => state.productReducerAddCart)
             const dispatch = useDispatch()
    // console.log(product,producddt);

// if(product === undefined)
//   {
//     dispatch(setAddCart(Object.values(producddt)))
//         console.log(product);

//   }
    console.log(product);
    let countProduct;
 
    
  
    if(product !== undefined)
    {
        countProduct=product.length
    } else
    {
       countProduct   =0
    }
     const listOfProducts =
     
        product!==undefined?product.map((data,index) =>
    {
        return (
            <AddCartDisplay key={index} data={data} addCart={addCart} wishlistErrorClick={wishlistErrorClick} />
        )
}):null
    return (
        <div style={{ marginTop: '90px' }} className='container'>
            
            <div className='wishlist' style={{padding:' 20px 20px 0 20px',maxHeight:'79vh',overflow:'auto',position:'relative'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto wishlistMain'>
                     <p style={{padding: '10px 20px',
                             fontSize: '17px',
                            fontWeight: '500'
                        }}>My Cart&nbsp;({countProduct})</p> 
                    </div>
                </div>
                </div><br/>
            {listOfProducts}
         {/* <AddCartDisplay/>  */}
   
            <div align='center' className='mb-4'>
                <Link to='/' style={{textDecoration:'none' ,color:'white'}}>
                <Button   style={{borderRadius:'3px',marginTop:'20px',backgroundColor:'#3f51b5',color:'white',width:'20%',height:'40px',fontWeight:'bolder'}}>
 Go to home
          </Button>
 </Link>
                </div>

                <Snackbar open={close} autoHideDuration={3000} onClose={wishlistErrorClose}>
        <Alert onClose={wishlistErrorClose} severity="error">
          Removed from your Cart!
        </Alert>
            </Snackbar>
             <Snackbar open={openCart} autoHideDuration={3000} onClose={addCartClose}>
        <Alert onClose={addCartClose} severity="success">
          Saved for later!
        </Alert>
                </Snackbar>
                { countProduct>0?
                    <div className='buttondiv'>
                        <Button style={{
                            borderRadius: '3px',backgroundColor: '#ff3d00',color: 'white',width: '30%',height: '60px',float: 'right',fontWeight: 'bolder',fontSize: "15px"
                        }}> Place Order</Button>
                    </div>:null}
            </div>
       
                     {saveproduct.length>0?<SaveForLAter/>:null}
            
        </div>
    )
}

export default AddCart
