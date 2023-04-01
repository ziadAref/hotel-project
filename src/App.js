import React from 'react';


import './App.css';

import Header from './components/header/Header';

import Details from './components/homePage/Details';
import Sidebar from './components/homePage/Sidebar';
import Section from './components/homePage/Section';

import Request from './components/requestPage/Request';

import BlueBar from './components/productPage/BlueBar';
import ProductImg from './components/productPage/oneProduct/ProductImg';
import ProductDescribe from './components/productPage/oneProduct/ProductDescribe';
import ProductLocation from './components/productPage/oneProduct/ProductLocation';
import ProductMore from './components/productPage/oneProduct/ProductMore';
import ProductMoreMore from './components/productPage/oneProduct/ProductMoreMore';
import ProductMap from './components/productPage/oneProduct/ProductMap';

import Booking from './components/bookingPage/Booking';

import Proceed from './components/proceedPage/Proceed';


const App = () => {

  return (
        <div>
          <Header/>
          <Details/>
          <div className='main'>
            <Sidebar/>
            <Section/> 
          </div>
 
         <BlueBar/>
        <ProductImg/>
        <ProductDescribe/>
        <ProductLocation/>
        <ProductMore/>
        <ProductMoreMore/>
        <ProductMap/>
        
        
        <Booking/>     
        <Request/>

        <Proceed/>
        
   </div>
  );
}


export default App;

