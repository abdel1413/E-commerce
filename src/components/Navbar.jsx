
// import '../styles/navbar.css'

import { Link } from "react-router-dom";
import { Input } from './Input';



export const Navbar = ({searchItem,setSearchItem, cart , cartQuantity}) => {
  
cart 
  // const quantity = cart? cart.reduce((acc,next)=> acc + next.quantity,0)
  //                      : 0;
                     



// console.log("quantities:", cart.map(i => i.quantity))


  return (
//   <nav className="
//   bg-blue-500
//   shadow-md
//   flex
//   flex-col
//   sm:flex-row
//   sm:items-center
//   sm:justify-between
//   gap-3
//   text-white
//   px-3
//   md:px-5
//   py-3
//   w-full
// ">

// <Link to='/' className="text-xl">
//  Home 
// </Link>
//   {/* SEARCH */}
//   <div className="flex-1">
//     <Input
//       searchItem={searchItem}
//       setSearchItem={setSearchItem}
//     />
//   </div>

//   {/* RIGHT SECTION */}
//   <div className="flex items-center gap-2 md:gap-6 shrink-0">

//     <Link
//       to="/Orders"
//       className="
//         border border-transparent
//         hover:border-gray-200
//         transition-colors
//         duration-300
//         p-1 md:p-2
//         text-sm md:text-base
//         whitespace-nowrap
//       "
//     >
//       <span className="block md:inline">
//         Returns
//       </span>

//       <span className="block md:inline">
//         & Orders
//       </span>
//     </Link>

//     <Link
//       to="/Checkout"
//       className="
//         border border-transparent
//         hover:border-gray-200
//         transition-colors
//         duration-300
//         p-1
//       "
//     >

//       <div className="flex items-center gap-1">

//         <div className="relative flex items-center justify-center w-10 h-10">

//           <img
//             className="w-full h-full object-contain"
//             src="images/icons/icons/cart-icon.png"
//             alt="cart"
//           />

//           <div className="absolute top-0 right-3 text-sm md:text-lg text-black font-bold">
//             {cartQuantity}
//           </div>

//         </div>

//         <div className="hidden sm:block mt-1">
//           cart
//         </div>

//       </div>

//     </Link>

//   </div>

// </nav>
<nav className="bg-blue-500 shadow-md text-white px-4 py-3 w-full">

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

    {/* MOBILE TOP ROW */}
    <div className="flex items-center justify-between md:hidden">

      <Link to="/" className="text-lg font-semibold">
        Home
      </Link>

      <Link
        to="/Orders"
        className="text-sm leading-tight hover:text-gray-200"
      >
        Returns
        <br />
        & Orders
      </Link>

      <Link to="/Checkout">
        <div className="flex items-center gap-1 relative">
          <img
            className="w-10"
            src="images/icons/icons/cart-icon.png"
            alt="cart"
          />

          <div className="absolute -top-1 left-4 text-black font-semibold">
            {cartQuantity}
          </div>

          <div className="text-sm">cart</div>
        </div>
      </Link>

    </div>

    {/* DESKTOP/TABLET */}
    <Link
      to="/"
      className="hidden md:block text-lg font-semibold"
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
    <div className="hidden md:flex items-center gap-6">

      <Link
        to="/Orders"
        className="text-lg font-semibold leading-tight hover:text-gray-200"
      >
        Returns
        <br />
        & Orders
      </Link>

      <Link to="/Checkout">
        <div className="flex items-center gap-1 relative">
          <img
            className="w-10"
            src="images/icons/icons/cart-icon.png"
            alt="cart"
          />

          <div className="absolute -top-1 left-4 text-black font-semibold">
            {cartQuantity}
          </div>

          <div className="text-lg font-semibold">cart</div>
        </div>
      </Link>

    </div>

  </div>
</nav>
  );
}