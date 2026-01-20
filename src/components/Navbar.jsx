
// import '../styles/navbar.css'

import { Link } from "react-router-dom";
import { Input } from './Input';



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


          <div  className="flex header-link border-2 border-blue-500 hover:border-gray-200 transition-colors duration-300 p-1">
          <Link 
          to="/Checkout"
          >
            <div className="cart-icon-container relative flex items-center size-12" >
              <img className="cart-icon " src="images/icons/icons/cart-icon.png" alt="cart" />
              <div className=" absolute top-0 left-5 cart-quantity  text-lg text-black ">3</div>
              <div className="cart-text ">Cart</div>
            </div>
          </Link>
          </div>
      </div>
        
     
    </nav>
  );
}