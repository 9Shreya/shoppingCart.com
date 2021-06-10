import { SET_PRODUCTS,REMOVE_SELECTED_ID_MAIN,Search_TERM,SELECTED_PRODUCT_SAVELATER,REMOVE_SELECTED_SAVELATER_PRODUCT,REMOVE_SELECTED_ID,REMOVE_SELECTED_AddCart_PRODUCT,SELECTED_PRODUCT_AddCart,SELECTED_PRODUCT ,REMOVE_SELECTED_PRODUCT,SELECTED_PRODUCT_IDS} from '../constant/action-types'
import axios from 'axios';
export const setProducts =(products)=> {
    return {
        type: SET_PRODUCTS,
        payload:products
    }
}
export const selectedProduct =(product)=> {
    return {
        type: SELECTED_PRODUCT,
        payload:product
    }
}
export const removeSelectedProduct =()=> {
    return {
        type: REMOVE_SELECTED_PRODUCT,
    }
}
export const setWishlist = (productIDs) =>
{
        console.log(productIDs);

    return {
        type: SELECTED_PRODUCT_IDS,
        payload:productIDs
    }
}
export const removeSelectedID = (productIDs) =>
{
    console.log(productIDs);
    return {
        type: REMOVE_SELECTED_ID,
               payload:productIDs

    }
}
export const removeSelectedIDMain = (productIDs) =>
{
    console.log(productIDs);
    return {
        type: REMOVE_SELECTED_ID_MAIN,
               payload:productIDs

    }
}

export const setAddCart = (product) =>
{
    return {
        type: SELECTED_PRODUCT_AddCart,
        payload:product
    }
}
export const removeAddCartproduct = (product) =>
{
    return {
        type: REMOVE_SELECTED_AddCart_PRODUCT,
        payload:product
    }
}
export const setSaveLater = (product) =>
{
    return {
        type: SELECTED_PRODUCT_SAVELATER,
        payload:product
    }
}
export const removeSaveLaterproduct = (product) =>
{
    return {
        type: REMOVE_SELECTED_SAVELATER_PRODUCT,
        payload:product
    }
}

export const search = (product) =>
{
    return {
        type: Search_TERM,
        payload:product
    }
}

export const fetchApi = () =>
{
  return async (dispatch) =>
        {
            const response = await axios.get('https://fakestoreapi.com/products').catch((err) => { console.log(err); }
            )
            console.log(response.data);
            dispatch({
                type: SET_PRODUCTS,
                payload: response.data
            });
        }
 
}