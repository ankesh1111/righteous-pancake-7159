import { Link } from "react-router-dom";
import React,{useState } from "react";
// import Navbar from "../Components/Navbar";
import "./login.css"

function Login(){

    const [email, setEmail]= useState("");
    
    const [user, newUser] =useState([])

    const submitForm=(e)=>{
        e.preventDefault()
        const newEntry= {email: email};

        newUser([ ...user, newEntry]);
        console.log(user)
    }


    return (
        <>
       

        <div>
     <hr />
     <div id="login">
        <div>
            <h4 class="h1">Already a member</h4>
            <h3 class="h2">Sign in</h3>
            
     <form id="form" onSubmit={submitForm}/>
                <h5 class="h3">Email address</h5>
                <input  id="email1" 
                type="text"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter your email address"/>
         
           <br />
           
              <br/><br/>
              <div>
              <button type="submit" class="s1">   <Link to="/">Sign in</Link></button>
              </div>
            
            <br />
            
            {/* <Link to="/">Sign in</Link> */}
     <form/>
     
            <p7 class="s2">Or</p7>
            <br />
            <br />
            <button class="btn">Continue with Facebook</button>
            <br/> 
            <br />
            <br />
 
            <button class="btn1">Continue  with Google</button>
        </div> 
        <div id="login1">
            
        <div>
             <h6 class="g3">As a Lyst member you can...</h6>
            {/* <h6 class="h4">As a Lyst member you can...</h6> */}
            <p9 class="h5">Save your searches</p9><br/><br/>
            <p9 class="h5">Create a wishlist</p9><br/><br/>
            <p9 class="h5">Get alerts on your items</p9><br/><br/>
        </div>

        </div>

    </div>
  

        </div>
        </>
    )
}

export default Login