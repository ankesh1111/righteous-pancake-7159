
import "./checkout.css"

function Checkout(){

    return (
        <div>

         

        <h3 class="h3">MYTHERESA</h3>

<div id="shop1">
    <p class="shop2">SHOPPING BAG</p>
    <p class="shop2">SIGN IN</p>
    <p class="shop2">DELIVERY</p>
    <p class="shop2">PAYMENT</p>
    <p class="shop2">CONFIRM</p>
</div>
 <hr/>

 <div>

    <form id="form1">
        <h3 class="h4">Payments Page</h3>
        <p class="shop2">Name on card</p>
        <input type="text" id="name" placeholder="Enter your name"/>
        <p class="shop2">Credit card number *</p>
        <input type="text" id="card" placeholder="Enter card number"/>
        <p class="shop2">Expiration date *</p>
        <input type="text" id="date" placeholder="Enter Expiration date"/>
        <p class="shop2">CVC / CVV *</p>
        <input type="text" id="cvv" placeholder="Enter CVV"/>
        {/* <button><Link to="/"></Link><Submit></Submit></button> */}
        <input type="submit" id="submit1"/>
    </form>
    
 </div>
  
        </div>
    )
}
export default Checkout;