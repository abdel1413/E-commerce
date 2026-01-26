// import { useState } from "react";

export const DropDown = () => {
//  const [selected, setSelected] =  useState('')
//  const handleSelected = (e) => setSelected(e.target.value)
  return (
    <div className="relative inline-block text-left">
      <div className="product-quantity-container">
            <select className="product-quantity-dropdown border border-gray-300 rounded-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={1}
            >
             {[1, 2, 3, 4, 5].map((qty) => (
               <option key={qty} value={qty}>
                 Qty: {qty}
               </option>
             ))}

              
            </select>
          </div>
    </div>
    );
    }
        

