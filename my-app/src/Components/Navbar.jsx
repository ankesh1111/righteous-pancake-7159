

function Navbar(){

    return (
        <div>
            
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


        </div>
    )
}

export default Navbar;