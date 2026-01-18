
// import '../styles/navbar.css'

import { Input } from './Input';

export const Navbar = () => {
  return (
    <nav className=" bg-blue-500 shadow-md navbar flex items-center text-white justify-between px-6 py-2">

      < Input />
       <div className="amazon-header-right-section flex items-center gap-6 ">
          <a className="orders-link header-link border-2 border-blue-500 hover:border-gray-200 transition-colors duration-300 p-4" href="orders.html">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </a>

          <a className=" flex  cart-link header-link border-2 border-blue-500 hover:border-gray-200 transition-colors duration-300 p-4 " href="checkout.html">
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