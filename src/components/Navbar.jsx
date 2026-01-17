
// import '../styles/navbar.css'

import { Input } from './Input';

export const Navbar = () => {
  return (
    <nav className="w-full bg-blue-500 shadow-md navbar flex items-center text-white pw-4 py-2 justify-between">

      < Input />
       <div className="amazon-header-right-section flex items-center gap-6  ">
          <a className="orders-link header-link hover:border-white" href="orders.html">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </a>

          <a className=" flex  cart-link header-link" href="checkout.html">
            <div className="cart-icon-container relative flex items-center">
            <img className="cart-icon" src="images//icons/cart-icon.png" alt="cart" />
            <div className=" absolute top-2 left-10 cart-quantity text-lg">3</div>
            <div className="cart-text ">Cart</div>
            </div>
          </a>
      </div>
        
     
    </nav>
  );
}