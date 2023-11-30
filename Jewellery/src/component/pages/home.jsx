
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Novcar from '../novigation/Novigation';
import First from '../first/First';
import Category from '../category/Category';
import Trendingnow from '../trendingnow/Trendingnow';
import Selling from '../selling/Selling';
import Ontrend from '../ontrend/Ontrend';
import Hand from '../hand/Hand';
import Unique from '../unique/Unique';
import Chooseus from '../chooseus/Chooseus';
import Delivery from '../delivery/Delivery';
import Footer from '../footer/Footer';
import Basket from '../basket/Basket';

function Home(){
  return(
 
      <Provider store={store}>
<div>
  <Novcar/>
  <First/>
  <Category/>
  <Trendingnow/>
  {/* <Selling/> */}
  <Ontrend/>
  <Hand/>
  <Unique/>
  <Chooseus/>
  <Delivery/>
  <Footer/>
   



</div>
      </Provider>
  
  )
}

export default Home
