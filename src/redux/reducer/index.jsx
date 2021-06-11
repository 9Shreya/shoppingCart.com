import { combineReducers } from 'redux'
import { productTheme,productReducer,productReducerSeacrh,productReducerSaveForLater,productReducerAddCart,selectedProduct,productReducerIds } from './productreducer'

const reducers = combineReducers({
    productReducer: productReducer,
    selectedProduct: selectedProduct,
    productReducerIds:productReducerIds,
    productReducerAddCart: productReducerAddCart,
productReducerSaveForLater:productReducerSaveForLater,
    productReducerSeacrh: productReducerSeacrh,
productTheme:productTheme
})
export default reducers;