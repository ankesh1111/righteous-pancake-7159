import Navbar from "../Components/Navbar";
 
 import "./Sign.css"

 

 function Signup(){

    return (
        <div>
         <Navbar/>
          <hr />

<div id="sign1">
    <div>
        
        <p>New to Lyst?</p>
        {/* <!-- <p1>Already a member</p1> --> */}
       <h5>Search thousands of fashion<br/> brands and stores all in one<br/> place</h5>
        
       <p3>We just need a few details from you first</p3>
       
       <form id="form"/>
        <h5>Email address</h5>
        <input id="email" type="text" placeholder="Enter your email address"/>
 
        <h5>Password</h5>
       
        <input id="pass" type="text" placeholder="min 8 characters"/><br/><br/>
   <p3>I would like to hear about products, services, </p3>
       <br/><br/>  
      
        <button>Join Lyst</button><br/><br/>
       <form/>
      

      
        <p4>Or</p4>
       <input class="r1" type="text" placeholder="Continue with Google"/>
    <br />
       <p3>By creating an account, you consent to Lyst’s </p3>
    </div>
    
    <div id="sign2">

        <div>
            <h6>As a Lyst member you can...</h6>
            <p2>Save your searches</p2><br/><br/>
            <p2>Create a wishlist</p2><br/><br/>
            <p2>Get alerts on your items</p2><br/><br/>
        </div>
    </div>

</div>

</div>
    )
 }

 export default Signup;