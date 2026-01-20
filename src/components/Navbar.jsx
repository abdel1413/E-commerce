
// import '../styles/navbar.css'

import { Link } from "react-router-dom";
import { CheckoutPage } from './CheckoutPage';
import { Input } from './Input';
import { Orders } from './Orders';


export const Navbar = () => {
  return (
    <nav className=" bg-blue-500 shadow-md navbar flex items-center text-white justify-between px-6 py-2">

      < Input />
       <div className="amazon-header-right-section flex items-center gap-6 ">
          <Link
          to="/Orders"
           className="orders-link header-link border-2 border-blue-500 hover:border-gray-200 transition-colors duration-300 p-4">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </Link>

          <Link 
          to="/CheckoutPage"
          className=" flex  cart-link header-link border-2 border-blue-500 hover:border-gray-200 transition-colors duration-300 p-4 ">
            <div className="cart-icon-container relative flex items-center">
              <img className="cart-icon" src="images//icons/cart-icon.png" alt="cart" />
              <div className=" absolute top-2 left-10 cart-quantity text-lg">3</div>
              <div className="cart-text ">Cart</div>
            </div>
          </Link>
      </div>
        
     
    </nav>
  );
}