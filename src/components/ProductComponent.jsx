import React from 'react'
import { useSelector } from 'react-redux';
import ProductHeartCopm from './ProductHeartCopm'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={1}  {...props} />;
}

function ProductComponent({props})
{         console.log(props.productReducerIds);
  const [open, setOpen] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  const [close, setclose] = React.useState(false);
  const [closeCart, setcloseCart] = React.useState(false);

  const wishlistClick = () => {
    setOpen(true);
  };
    const addCart = () => {
    setOpenCart(true);
    };
  const wishlistErrorClick = () => {
    setclose(true);
  };
    const addCartError = () => {
    setcloseCart(true);
  };

  const wishlistClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const addCartClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenCart(false);
    };
  
  const wishlistErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setclose(false);
  };
    const addCartErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setcloseCart(false);
  };
  const wishlit= props.productReducerIds.product
    const products = useSelector(state => state.productReducer.product)
     console.log(wishlit);
    let valueProdtucs = products.map((product,index) =>
    {
      let val = wishlit!==undefined?wishlit.filter(data =>  data.id === product.id ):[]
      // console.log(val,product);
        return (  
          <ProductHeartCopm key={index} product={product} val={val} wishlistClick={wishlistClick} addCart={addCart} addCartError={addCartError} wishlistErrorClick={wishlistErrorClick}/> 
      )
    })
  
  
  const searchdata = useSelector(state => state.productReducerSeacrh.product)
  console.log(searchdata);
  if(searchdata.length > 0)
  {
    let val = products
    
    let searchValueData = val.filter(data =>
    {console.log( data.category.toLowerCase().includes(searchdata));
     return  data.category.toLowerCase().includes(searchdata) || data.description.toLowerCase().includes(searchdata) || data.title.toLowerCase().includes(searchdata)
    })
    console.log(searchValueData);
    
    valueProdtucs = searchValueData.map((product,index) =>
    {
        return (  
          <ProductHeartCopm key={index} product={product} wishlistClick={wishlistClick} addCart={addCart} addCartError={addCartError} wishlistErrorClick={wishlistErrorClick}/> 
      )
    })
  }
//  const {id,image,category,description,price}=products
    return (
        <div className="ui link cards"  style={{marginTop:'50px'}}>
            {valueProdtucs}
             <Snackbar open={open} autoHideDuration={3000} onClose={wishlistClose}>
        <Alert onClose={wishlistClose} severity="success">
          Added to your Wishlist!
        </Alert>
        </Snackbar>
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
        <Snackbar open={closeCart} autoHideDuration={3000} onClose={addCartErrorClose}>
        <Alert onClose={addCartErrorClose} severity="error">
          Removed from your Cart!
        </Alert>
            </Snackbar>
        </div>
    )
}

export default ProductComponent
