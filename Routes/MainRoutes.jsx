

import React from "react";
import {Route, Routes} from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Home from "../pages/Home"


const MainRoutes=()=>{
    return (
        <>
     <Navbar/>


     <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/signup" element={<Signup/>}/> 
         <Route path="/login" element={<Login/>}/> 
         <Route path="/men" element={<Men/>}/> 
         <Route path="/Women" element={<Women/>}/>  
         <Route path="/cart" element={<Cart/>}/> 
         <Route path="/checkout" element={<Checkout/>}/> 

     </Routes>
     



        </>
    )
}

export default MainRoutes;