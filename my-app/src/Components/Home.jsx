


function Home(){

    return (

        <div>
{/* Navbar section here */}


{/* Navbar section 1 */}

<div id="navbar">

        <div>
            <select class="opt">
                <option value="">CA - US$</option>
                <option value="">Afghanistan</option>
                <option value="">Bangladesh</option>
                <option value="">China</option>
                <option value="">Dominica</option>
                <option value="">Egypt</option>
                <option value="">France</option>
                <option value="">Guinea</option>
                <option value="">Jordan</option>
                <option value="">Kenya</option>
                <option value="">Liberia</option>
                <option value="">Maldives</option>
            </select>
           
        </div>

        <div>
            <select class="opt1">
                <option value="">Help</option>
                <option value="">Help center</option>
                <option value="">Contact us</option>
                <option value="">About us</option>
                <option value="">Careers</option>
            </select>
        </div>
        <div class="l2"><a href="login.jsx">Sign in</a></div>
        <div class="l1"><a  href="signup.jsx">Join</a></div>
</div>

   
{/* Navbar section 2 */} 

    <div id="container">

        <h2 class="lyst">LYST</h2>
        <a href="Women.jsx">WOMEN </a> 
        <a href="Men.jsx">MEN</a> 
        <div>
            <input    type="text"   placeholder="SEARCH (E.G ACNE JEANS)"/>
            <i class="fa-solid fa-magnifying-glass search"></i>
        </div>
      </div>
     


{/* First Section */}

    <div id="container1">

       <div>
        <img  src="https://cdna.lystit.com/cms/ENG_header_desktop_bddf9b3474_884ff704d3.jpg" alt=""/>
       </div>
 
 
    </div>
    <br />
    <br />
    <br />
    <br />
   
       
    {/* Second section */}
 

   {/*  first body */}


 <div id="container2">

<p class="p1">Bag an Icon</p>
<div class="div1">
   
    <img src="https://cdna.lystit.com/cms/ea59bbea_bf2d_4441_90aa_b0a1a8ee614b_21dfec2728.png" alt=""/>
    
</div>
<p class="p1">30 UNDER 300</p>
<div class="div1">
    <img src=" https://cdna.lystit.com/cms/2c09c3f3_34a7_4302_9a44_416fd3fa5d76_10988971ba.png" alt=""/>
</div>
<p class="p1">TREND TO KNOW </p>
<div class="div1">
    <img src="https://cdna.lystit.com/cms/3c70c00c_25c6_42ef_8e12_6a5e0e5819e7_fd338f521d.png" alt=""/>
</div>
<p class="p1">THIS IS FASHION </p>
</div>


   {/*  second body */}


<div id="container2">
    <p class="p1">DISCOVER OUR STYLISH AND ICONIC MULBERRY </p>
    <div class="div1">
        <img src="https://cdna.lystit.com/cms/LYST_600x600_CTA_5_1_18f34c2397.jpg" alt=""/>
     </div>
      <p class="p1">TARNISH FREE   </p>
    <div class="div1">
     <img src=" https://cdna.lystit.com/cms/Arms_of_Eve_337b105039.jpeg" alt=""/>
    </div>
    <p class="p1"> THE KRIPT SHOP </p>
    <div class="div1">
    <img src="https://cdna.lystit.com/cms/THE_KRIPT_1_b1fedfd3d1.jpg" alt=""/>
    </div>
</div>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
 

{/* Third section */}
 
 <div id="container3">
    <div>
        <h1>BREAKOUT <br />BRANDS</h1>
    </div>

    <div class="div">
        <p>PATOU</p>
        <img src="https://cdna.lystit.com/cms/My_Post_81_76121ffa01.jpg" alt="" />
    </div>

    <div class="div">
        <p>GUCCI</p>
        <img src="https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg" alt="" />
    </div>
 </div>



 <div id="container3">
    <div class="div2">
        <p>ETON</p>
        <img src="https://cdna.lystit.com/cms/eton_sweden_shirt_da4fff6982.jpg" alt="" />
    </div>

    <div class="div2">
        <p>GALVAN  </p>
        <img src="https://cdna.lystit.com/cms/galvan_dress_cb31d2b319.jpg" alt="" />
    </div>

    <div class="div2">
         <h1>TRENDING <br />NOW</h1>
        
    </div>
 </div>



 <div id="container3">
    <div class="a1">
      <p>BONOBOS</p>
      <img src="https://cdna.lystit.com/cms/bonobos_shorts_6a3e83ea91.jpg" alt="" />
    </div>

    <div class="a1">
        <h1>HOT RIGHT NOW</h1>
    </div>

    <div class="a1">
        <p>BALENCIAGA</p>
        <img src="https://cdna.lystit.com/cms/balenciaga_swimwear_a06622c701.jpg" alt="" />
    </div>
 </div>

<br />
<br />
<br />

        </div>
    )
}

export default Home;