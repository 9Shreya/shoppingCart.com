import React, { useEffect } from 'react'
import {selectedProduct,removeSelectedProduct,setAddCart} from '../redux/action/ActionType'
import { useDispatch, useSelector } from 'react-redux'
 import {useParams} from 'react-router-dom'
import axios from 'axios'
import {SideBySideMagnifier} from "react-image-magnifiers";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6}  {...props} />;
}



function ProductDetails({props})
{
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  let arrayAddCartproduct = useSelector(state => state.productReducerAddCart.product)
     console.log(arrayAddCartproduct); 
       const addtoCart =async (id) =>
    {
      
const data = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err) => console.log(err))

                   arrayAddCartproduct= [...arrayAddCartproduct,data.data]
    
        dispatch(setAddCart(arrayAddCartproduct))
        
  }
    let product;
     product = useSelector(state => state.selectedProduct)
    console.log(product);

    
   

    const {productid}=useParams()
console.log(productid);
    const dispatch = useDispatch()
  const FetchSingleProduct = async () =>
  {
    const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch((err) => { console.log(err); })
    console.log(response.data);
    product = response.data
    console.log(product);
       
    dispatch(selectedProduct(response.data))
    //  product = useSelector(state => state.selectedProduct.product)
    // console.log(product);
  }
    const {title,description,image,price,category}=product;

    useEffect(() =>
    {console.log('hi');
        FetchSingleProduct()
        return ()=>{
            dispatch(removeSelectedProduct())
        }
},[productid])
    return (
          <div className='container ' style={{padding:'100px'}}>
           
        {Object.keys(product).length === 0 ? (
            <div>..Loading</div>):
            (<div className='row boxColor m-auto' style={{height:'75vh'}}>
                <div className='col-md-6 ' 
style={{justifyContent: 'center',alignItems: 'center',height:'50vh'}}>
                        
                        <SideBySideMagnifier className="detailImage col-md-12  " style={{width:'70%',margin: 'auto',marginBottom:'55px',paddingTop:'65px'}}
  imageSrc={image}
  imageAlt="Example"
  largeImageSrc={image} // Optional
/>
                      
                 {/* <img src={image} alt='' className="detailImage col-md-12 " /> */}
                </div>  
            <div className='col-md-6'>
                    <h3>{title} </h3>
                    <br/>
                    <a className="ui teal tag label">$ {price}</a>
               <p className="ui block brown header">
                {category}
                    </p>
                    <p>
                        {description}
                    </p>

              <button className="ui google plus button" onClick={() => { handleClick(); addtoCart(productid) }}>
                        Add to Cart
                    </button>
                    </div>     
                    





            </div>
            
        )
            }
            
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to Cart!
        </Alert>
      </Snackbar>
        </div>
    )
}

export default ProductDetails
