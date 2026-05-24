
// import '../styles/navbar.css'

import { Link } from "react-router-dom";
import { Input } from './Input';



export const Navbar = ({searchItem,setSearchItem, cart , cartQuantity}) => {
  
cart 
  // const quantity = cart? cart.reduce((acc,next)=> acc + next.quantity,0)
  //                      : 0;
                     

  return (
<nav className="bg-blue-500 shadow-md text-white px-4 py-2 w-full ">

  <div className="flex flex-col md:flex-row md:items-center max-w-7xl ms-auto gap-3 ">
    <Link to='/'
    className="hidden md:block text-lg font-semibold shrink-0">
    </Link>

    {/* MOBILE TOP ROW */}
    <div className="flex items-center justify-between md:hidden">

      <Link to="/" className="text-lg font-semibold border border-transparent hover:scale-105 hover: text-gray hover:border-white transition-all duration-300 p-2  ">
        Home
      </Link>

      <Link
        to="/Orders"
        className="text-[13px] leading-tight  border border-transparent hover:scale-105 hover: text-gray hover:border-white transition-all duration-300 p-2  "
      >
        Returns
        <br />
        & Orders
      </Link>

      <Link to="/Checkout">
        <div className="flex items-center gap-1 relative  border border-transparent hover:scale-105 hover: text-gray hover:border-white transition-all duration-300 p-2 ">
          <img
            className="w-8 md:w-10"
            src="images/icons/icons/cart-icon.png"
            alt="cart"
          />

          <div className="absolute top-1 left-5 text-black font-semibold">
            {cartQuantity}
          </div>

          <div className="text-sm">cart</div>
        </div>
      </Link>

    </div>

    {/* DESKTOP/TABLET */}
    <Link
      to="/"
      className="hidden md:block text-lg font-semibold  border border-transparent hover:scale-105 hover: text-gray hover:border-white transition-all duration-300 p-2 "
    >
      Home
    </Link>

    {/* SEARCH */}
    <div className="w-full md:flex-1 md:max-w-2xl">
      <Input
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
    </div>

    {/* RIGHT SECTION DESKTOP */}
    <div className="hidden md:flex items-center gap-8 shrink-0">

      <Link
        to="/Orders"
        className="text-base font-medium leading-tight border border-transparent hover:scale-105  hover: text-gray hover:border-white transition-all duration-300 p-2  "
      >
        Returns
        <br />
        & Orders
      </Link>

      <Link to="/Checkout">
        <div className="flex items-center gap-2 relative border border-transparent hover:scale-105 hover: text-gray hover:border-white transition-all duration-300 p-2 ">
          <img
            className="w-10"
            src="images/icons/icons/cart-icon.png"
            alt="cart"
          />

          <div className="absolute top-1 left-6 text-black  text-lg font-medium">
            {cartQuantity}
          </div>

          <div className="text-base font-medium ">cart</div>
        </div>
      </Link>

    </div>

  </div>
</nav>
  );
}