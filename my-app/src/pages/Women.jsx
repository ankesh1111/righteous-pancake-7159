 
 import React from "react";
 import {useEffect} from "react";
 import { Link } from "react-router-dom";
 import {useState} from "react";
 import "./Women.css"
 
 function Women(){
     const [data,setData] = useState([])
 
     const getData = async () => {
         try{
             let data = await fetch(`http://localhost:4003/womenData`)
             data = await data.json()
             console.log(data)
             setData(data)
         }
         catch(err){
           console.log(err)
         }
     }
 
     useEffect(() => {
         getData()
     },[])
 
     return (
         <div>


<div id="women">
          <p>Clothing</p>
          <p>Shoes</p>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Jewelry</p>
          <p>Brands</p>
          <p>All Women's</p>
          <p>Sale</p>
  </div>
  
  <div id="womens">
            <p>All Clothing</p>
            <p>Beachwear</p>
            <p>Coats</p>
            <p>Dresses</p>
            <p>Hosiery</p>
            <p>Jackets</p>
            <p>Jeans</p>
            <p>Lingeria</p>
            <p>Jumpsuits and rompers</p>
            <p>Nightwear and sleepwear</p>
            <p>+More</p>
        </div>
        
        
        <div id="vertical-line"></div>
 

 
      
        <div className='womenpage' >
            
            {
               data.map( Women =>
                   <div key = {Women.id} >
                    <br />
                        <img style={{width:"200px" ,height:"200px" }} src={Women.image_url}/>
                        <br />
                        {Women.name} 
                        <br />
                        <br />
               {Women.features}  <br/>

                       <br/>
                       
                       {Women.price}
                       <br />
                       <br />
                       <br />
                       <button style={{backgroundColor:"white" ,  marginLeft:"5px"}}><Link to="/Cart">Cart</Link></button>
                       {/* <button style={{backgroundColor:"white",   marginLeft:"5px", marginTop:"30px"}}><Link to="/Checkout">Checkout</Link></button> */}
                   
                   </div>
                   )
            }

        
         </div>
         </div>
     )
 }
 
 export default Women;