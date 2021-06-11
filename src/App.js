import './App.css';
import React  from 'react';
import Header from './components/Header'

import {BrowserRouter ,Route,Switch} from 'react-router-dom'
// import ProductComponent from './components/ProductComponent';
import ProductDetails from './components/ProductDetails';
import PorductList from './components/PorductList';
import Wishlist from './components/Wishlist';
import AddCart from './components/AddCart';
import { useSelector } from 'react-redux';
function App()
{
      const theme = useSelector(state => state.productTheme.theme)

  return (
    <div className={theme?'dark':'light'}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/shoppingCart.com' exact component={PorductList} />
          <Route path='/productDetail/:productid' exact component={ProductDetails} />
          <Route path='/wishlist' exact component={Wishlist} />
          <Route path='/addCart' exact component={AddCart} />

          
          {/* <Route path='/productList' exact component={PorductList} /> */}
          <Route>404 Page not found! </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
