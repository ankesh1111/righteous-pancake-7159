import React, { useEffect, useState } from 'react'
 
 
import { Link } from "react-router-dom";
import './Menspage.css';

<hr />

function Men(){

  const [data, setData] =useState([]);

  const getData=async()=>{
    try{
      let data =await fetch(`http://localhost:4000/mensData`)
      data=await data.json();
      console.log(data)
      setData(data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])

 
  return (

  
    <div> 

<div id="men">
          <p>Clothing</p>
          <p>Shoes</p>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Jewelry</p>
          <p>Brands</p>
          <p>All Men's</p>
          <p>Sale</p>
  </div>
  
  <div id="mens">
            <p>All Clothing</p>
            <p>Beachwear</p>
            <p>Coats</p>
            <p>Jackets</p>
            <p>Jeans</p>
            <p>Sweaters and Knitwear</p>
            <p>Nightwear and sleepwear</p>
            <p>Pants,Slacks and Chinos</p>
            <p>Lingeria</p>
            <p>Shorts</p>
            <p>+More</p>
        </div>
        <div id="vertical-line"></div>
  


  
      
<div className='mainpage'>
            
            {
               data.map( Men =>
                   <div key = {Men.id} >
                    <br />
                        <img style={{height:"200px",width:"200px" }} src={Men.image_url}/>
                        <br />
                        <br />
                        {Men.name} 
                        <br />
                        <br />
                        {  Men.features}   <br/>

                       <br/>
                       {Men.price}
                       <br />
                       <button style={{backgroundColor:"white"  , marginLeft:"5px", marginTop:"30px"}}><Link to="/Cart">Cart</Link></button>
                       {/* <button style={{backgroundColor:"white"  , marginLeft:"5px", marginTop:"30px"}}><Link to="/Checkout">Checkout</Link></button> */}
                </div>
                   )
            }
       </div>










 
 
 
</div>
  )
}
export default Men


// http://localhost:3000/mensData