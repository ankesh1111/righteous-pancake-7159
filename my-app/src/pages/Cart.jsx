import React, { useEffect, useState } from 'react'
 
 
import { Link } from "react-router-dom";
import './Cart.css';

function Cart(){

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
            
           <hr />
           <div className='cartpage'>
            
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
                       {/* <button style={{backgroundColor:"white"  , marginLeft:"5px", marginTop:"30px"}}><Link to="/Cart">Cart</Link></button> */}
                       <button style={{backgroundColor:"white"  , marginLeft:"5px", marginTop:"30px"}}><Link to="/Checkout">Checkout</Link></button>
                </div>
                   )
            }
       </div>



        </div>
    )
}
export default Cart;