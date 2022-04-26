import React from "react";
import { Route, Routes } from "react-router-dom";


//local imports
import { Footer, Modal, Navbar, SideBar, Themes } from "./Components";
import {About, Cart, Home, Produtcs, SingleProduct, Error, Checkout} from './Pages';

const  App = () => {
  
  return (
    <div>
      <Navbar />
      <SideBar />
      <Themes />
      <Modal/>
      <Routes className='variable-surface'>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/products' exact element={<Produtcs/>}/>
        <Route path='/products/:id' exact element={<SingleProduct/>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/checkout' exact element={<Checkout/>}/>
        <Route path='/*'  element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
