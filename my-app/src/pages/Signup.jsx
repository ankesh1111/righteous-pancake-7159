 import React, {useState} from "react";
 
import "./Signup.css"

 

const Signup=()=>{

    const [user, setUser]= useState({
        email:"",
        password:""
    });


    const [records, setRecords] =useState([])
    
    
    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name, value)

        setUser({ ...user, [name]:value});

    }

    const  handleSubmit=(e)=>{
         e.preventDefault();

         const newRecord = { ...user, id: new Date().getTime().toString()}
         console.log(records)
         setRecords([ ...records, newRecord])
         console.log(records)
    }



    return (

        <>
        <div>
         {/* <Navbar/> */}
          <hr />

    <div id="sign1">
    <div>
        <br />
        <p6 class="g2">New to Lyst?</p6>
       <br />
       <br />
       <p2 class="g1">Search thousands of fashion<br/> brands and stores all in one<br/> place</p2>
        <br />
        <br />
       <p2 class="g5">We just need a few details from you first</p2>
       <br />
       <br />

     <form id="form"  onSubmit={handleSubmit}/>
       
        <c1>Email address</c1>
        <br />


        <input id="email" type="text" 
        value={user.email}
        onChange={handleInput}
        name="email"
        
        placeholder="Enter your email address"/>


      <br />
        <c1>Password</c1>
       <br />

        <input id="pass" type="password" 
          value={user.password}
          onChange={handleInput}
           name="password"
           
        placeholder="min 8 characters"/><br/><br/>

       <p2>  I would like to hear about products,<br /> services, and sales, including personalized <br /> email alerts from Lyst. You can unsubscribe at <br /> any time. </p2>
       <br/><br/>  
      
        <button type="submit" style={{marginleft:"30px", padding:"10px",width:"325px",height:"50px"}}>Join Lyst</button><br/><br/>
       <form/>


      
       <p3>Or</p3>
       <input class="r1" type="text" placeholder="Continue with Google"/>
       <br />
       <br />
       <input class="r1" type="text" placeholder="Continue with Facebook"/>
    <br />
    <br />
       <p2 class="g6"> By creating an account, you consent to Lyst’s <br /> Terms & Conditions. To learn more about how <br /> Lyst uses and protects your personal data, <br /> please read Lyst’s Privacy Policy.</p2>
    </div>
    
    <div id="sign2">

        <div>
            <h6 class="g3">As a Lyst member you can...</h6>
            <p2 class="g4">Save your searches</p2><br/><br/>
            <p2 class="g4">Create a wishlist</p2><br/><br/>
            <p2 class="g4">Get alerts on your items</p2><br/><br/>
        </div>
    </div>

</div>

</div>
</>
    )
 }

 export default Signup;