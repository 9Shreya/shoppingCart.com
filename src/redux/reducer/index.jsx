import { combineReducers } from 'redux'
import { productReducer,productReducerSeacrh,productReducerSaveForLater,productReducerAddCart,selectedProduct,productReducerIds } from './productreducer'

const reducers = combineReducers({
    productReducer: productReducer,
    selectedProduct: selectedProduct,
    productReducerIds:productReducerIds,
    productReducerAddCart: productReducerAddCart,
productReducerSaveForLater:productReducerSaveForLater,
productReducerSeacrh:productReducerSeacrh
})
export default reducers;