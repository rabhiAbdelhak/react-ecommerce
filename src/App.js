import React from "react";
import { Route, Routes } from "react-router-dom";


//local imports
import { AddTocartComponent, Footer, Modal, Navbar, SideBar, Themes } from "./Components";
import {About, Cart, Home, Produtcs, SingleProduct, Error, Checkout, AuthWrapper, PrivateRoute} from './Pages';

const  App = () => {
  
  return (
    <AuthWrapper>
      <Navbar />
      <SideBar />
      <Themes />
      <Modal/>
      <AddTocartComponent/>
      <Routes className='variable-surface'>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/products'  element={<Produtcs/>}/>
        <Route path='/products/:id'  element={<SingleProduct/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/checkout'  element={<PrivateRoute><Checkout/></PrivateRoute>}/>
        <Route path='/*'  element={<Error/>}/>
      </Routes>
      <Footer/>
    </AuthWrapper>
  );
}

export default App;
