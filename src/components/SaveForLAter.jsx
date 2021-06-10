import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SaveForLaterDisplay from './SaveForLaterDisplay';

function Alert(props) {
  return <MuiAlert elevation={1} variant="filled" {...props} />;
}
function SaveForLAter()
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
    const product = useSelector(state => state.productReducerSaveForLater.product)
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
            <SaveForLaterDisplay key={index} data={data} addCart={addCart} wishlistErrorClick={wishlistErrorClick} />
        )
}):null

     return (
        // <div style={{ marginTop: '90px' }} className='container'>
            
        //     <div className='wishlist' style={{padding:' 20px 20px 0 20px',maxHeight:'79vh',overflow:'auto',position:'relative'}}>
         <div className='wishlist ' style={{padding:'20px',marginTop:'20px'}}>
             <div className='container'>  
         <div className='container '>
                <div className='row'>
                    <div className='col-md-8 m-auto wishlistMain'>
                     <p style={{padding: '10px 20px',
                             fontSize: '17px',
                            fontWeight: '500'
                        }}>Save For Later&nbsp;({countProduct})</p> 
                    </div>
                </div>
                </div><br/>
             {listOfProducts}
             
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
         {/* <SaveForLaterDisplay/>  */}
   
         </div>
       </div>
    )
}

export default SaveForLAter
