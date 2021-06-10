import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import  {setProducts} from '../redux/action/ActionType'
// import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux'
function PorductList(props)
{
   
    const dispatch = useDispatch()
    const fetchProductList =async () =>
    {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=> { console.log(err); }
        )
        props.setProducts(response.data)
        console.log(response.data,props);
    }
    // const history =useHistory()
useEffect(() => {
fetchProductList()
    // console.log(history.goBack());
}, [])
    return (
        <div style={{marginTop:'20px'}} className='ui grid container'>
          <ProductComponent props={props}/>
        </div>
    )
}
const mapTostate=(product)=>{
return product
}
export default connect(mapTostate,{setProducts})(PorductList)
