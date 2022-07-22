
   import { Link } from "react-router-dom";


function Navbar(){

    return (
        <div>
            
            {/* <Link to="/">Home</Link>  */}
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
<div class="l2"><Link   to="/Signup">Sign in</Link> </div>
<div class="l1"> <Link   to="/Login">Login</Link></div>
 
</div>


{/* Navbar section 2 */} 

<div id="container">

<h2 class="lyst">LYST</h2>

<Link to="/Women">  WOMEN </Link>  
<Link to="/Men"> MEN</Link> 
 



<div>
    <input type="text"   placeholder="SEARCH (E.G ACNE JEANS)"/>
    <i class="fa-solid fa-magnifying-glass search"></i>
</div>
</div>


        </div>
    )
}

export default Navbar;