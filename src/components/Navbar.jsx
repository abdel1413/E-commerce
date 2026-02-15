
// import '../styles/navbar.css'

import { Link } from "react-router-dom";
import { Input } from './Input';



export const Navbar = ({searchItem,setSearchItem, cart,cartQuantity}) => {
 

  const quantity = cart? cart.reduce((acc,next)=> acc + next.quantity,0)
                       : 0;
                       
 quantity
  return (
    <nav className=" bg-blue-500 shadow-md navbar flex text-white  px-5 py-2 w-full ">

      < Input searchItem={searchItem} setSearchItem={setSearchItem}/>
       <div className="amazon-header-right-section flex  gap-6 ">
          <Link
          to="/Orders"
           className="orders-link header-link border border-blue-500 hover:border-gray-200 transition-colors duration-300 p-2">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </Link>


          <div  className="flex border border-blue-500 hover:border-gray-200 transition-colors duration-300 p-1">
          
          <Link 
          to="/Checkout"
          >
            <div className="flex gap-1 item-center">
               <div className="cart-icon-container relative flex items-center size-12  border border-blue-500 " >
                  <img className="cart-icon " src="images/icons/icons/cart-icon.png" alt="cart" />
                  <div className=" absolute top-0 left-5 cart-quantity  text-lg text-black">{cartQuantity}</div>
                </div>
                <div className="cart-text text-center mt-3 ">cart</div>
            </div>
          </Link>
          </div>
      </div>  
    </nav>
  );
}