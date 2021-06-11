import React from 'react'
import { useSelector } from 'react-redux'
import WishlistDisplay from './WishlistDisplay';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// import { setWishlist } from '../redux/action/ActionType';

function Alert(props) {
  return <MuiAlert elevation={1}  {...props} />;
}

function Wishlist()
{
  const [close, setclose] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const wishlistErrorClick = () => {
    setclose(true);
  };
    const addCart = () => {
    setOpenCart(true);
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
  let product = useSelector(state => state.productReducerIds.product)
      // const producddt = useSelector(state => state.productReducerIds)
        //  const dispatch = useDispatch()
console.log(product);
  // console.log(product,Object.values(producddt));
  // if(product === undefined)
  // {
  //       dispatch(setWishlist(Object.values(producddt)))
  // }
    let countProduct;
    if(product !== undefined)
    {
        countProduct=product.length
    } else
    {
       countProduct   =0
    }
    let listOfProducts =
     
        product!==undefined?product.map((data,index) =>
    {
        return (
            <WishlistDisplay key={index} data={data}  wishlistErrorClick={wishlistErrorClick} addCart={addCart} />
        )
}):null

const searchdata = useSelector(state => state.productReducerSeacrh.product)
  console.log(searchdata);
  if(searchdata.length > 0)
  {
    let val = product
    
    let searchValueData = val.filter(data =>
    {console.log( data.category.toLowerCase().includes(searchdata));
     return  data.category.toLowerCase().includes(searchdata) || data.description.toLowerCase().includes(searchdata) || data.title.toLowerCase().includes(searchdata)
    })
    console.log(searchValueData);
    
   listOfProducts =
     
       searchValueData.map((data,index) =>
    {
        return (
            <WishlistDisplay key={index} data={data}  wishlistErrorClick={wishlistErrorClick} addCart={addCart} />
        )
})
  }
    return (
        <div className='containerGet container'  style={{ marginTop: '100px',marginLeft:'auto' }}>
                   <div className=' container'>
                <div className='row'>
                    <div className='col-md-8 m-auto wishlistMain'>
                     <p style={{padding: '10px 20px',
                             fontSize: '17px',
                            fontWeight: '500'
                        }}>My Wishlist&nbsp;({countProduct})</p> 
                    </div>
                </div>
                </div><br/>
            {listOfProducts}
            {/* <WishlistDisplay /> */}
             <Snackbar open={close} autoHideDuration={3000} onClose={wishlistErrorClose}>
        <Alert onClose={wishlistErrorClose} severity="error">
          Removed from your Wishlist!
        </Alert>
            </Snackbar>
             <Snackbar open={openCart} autoHideDuration={3000} onClose={addCartClose}>
        <Alert onClose={addCartClose} severity="success">
          Added to your Cart!
        </Alert>
            </Snackbar>
            <div align='center'>
                <Link to='/shoppingCart.com' style={{textDecoration:'none' ,color:'white'}}>
                <Button   style={{borderRadius:'3px',marginTop:'20px',backgroundColor:'#3f51b5',color:'white',width:'20%',height:'40px',fontWeight:'bolder'}}>
  Shop now
          </Button>
 </Link>
                </div>
        </div>
    )
}

export default Wishlist
