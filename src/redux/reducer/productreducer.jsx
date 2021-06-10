import {  SET_PRODUCTS,REMOVE_SELECTED_ID_MAIN,Search_TERM,SELECTED_PRODUCT_SAVELATER,REMOVE_SELECTED_SAVELATER_PRODUCT,REMOVE_SELECTED_AddCart_PRODUCT,SELECTED_PRODUCT_AddCart ,SELECTED_PRODUCT,REMOVE_SELECTED_PRODUCT,SELECTED_PRODUCT_IDS} from "../constant/action-types";

const initialState = {
    product: []
}

export const productReducer = (state=initialState,{type,payload}) =>
{
    switch(type)
    {
        case SET_PRODUCTS:
            {
                console.log(state,payload);
                return { ...state,product: payload }
            }
    
        default:
            {
                console.log(state);
                return state;
            }
    }
}

export const selectedProduct = (state={},{type,payload})=>{
    switch (type) {
        case SELECTED_PRODUCT:
            {
                console.log(state,payload);
                return { ...state,...payload }
            }
            case REMOVE_SELECTED_PRODUCT:
            {
                return { }
            }
        default:
            {
                console.log(state);
                return state;
            }
    }
}
export const productReducerIds = (state=initialState,{type,payload}) =>
{
    switch(type)
    {
        case SELECTED_PRODUCT_IDS:
            {
                console.log(state,payload);
                state=payload
                return {product:state }
            }
             case REMOVE_SELECTED_ID_MAIN:
            {
                // console.log(state,payload);
                // state.product.splice(payload,1) 
                // console.log(state,payload);

                return { product:[...state.product ]}
            }
        default:
            {
                console.log(state);
                return state;
            }
    }
}
export const productReducerAddCart = (state=initialState,{type,payload}) =>
{
    switch(type)
    {
        case SELECTED_PRODUCT_AddCart:
            {
                console.log(state,payload);
                return { product:payload }
            }
             case REMOVE_SELECTED_AddCart_PRODUCT:
            {
             console.log(state,payload);
                state.product.splice(payload,1) 
                console.log(state,payload);
                return { product:[...state.product ]}
            }
    
        default:
            {
                console.log(state);
                return state;
            }
    }
}
export const productReducerSaveForLater = (state=initialState,{type,payload}) =>
{
    switch(type)
    {
        case SELECTED_PRODUCT_SAVELATER:
            {
                console.log(state,payload);
                return { ...state,product: payload }
            }
             case REMOVE_SELECTED_SAVELATER_PRODUCT:
            {
                console.log(state,payload);
                return { ...state,product: payload }
            }
    
        default:
            {
                console.log(state);
                return state;
            }
    }
}

export const productReducerSeacrh = (state=initialState,{type,payload}) =>
{
    switch(type)
    {
        case Search_TERM:
            {
                console.log(state,payload);
                return { ...state,product: payload }
            }
    
        default:
            {
                console.log(state);
                return state;
            }
    }
}