import { useEffect, useRef, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";

export const CheckoutPage = ({cart, cartQuantity, totalBeforeTax}) => {
  const [input, setInput] = useState("")
   const [delivery,setDelivery] = useState([])
   useEffect(()=>{
     axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime').then( response =>
      setDelivery(response.data)
     )

   },[])
    console.log('delivery ',delivery)
    const shippingPrice = useRef(0)
  


  // const handleDelivery = ()=>{

  // }




   
  const handleChange = (e)=>{ 
    console.log('e',e.target.value)
    setInput(e.target.value)
  }
  
  return (
    <>
    <Navbar />
    <div className="main checkout-container max-w-7xl p-6">
      <div className="page-title text-lg font-bold text-red-400 ">Review your order</div>
      <div className="checkout-grid grid w-full grid-cols-1 md:grid-cols-3 gap-6 p-1">
        <div className="order-summary md:col-span-2">
       { cart.map(item => (
          <div className="cart-item-container w-800 bg-gray-100 border border-gray-300 px-4 mb-5 rounded-lg shadow: shadow-lg  dark: bg-gray-700 text-white"
          key={item.id}>
            <div className="delivery-date text-xl text-blue-500 font-bold mb-2 mt-2 ">
              Delivery date: Tuesday, June 21
            </div>
            <div className="cart-item-details-grid  flex justify-around border-red-600 py-2 px-4">
              <div className="flex gap-4 center justify-space-between" key={item.id}>
              <img className="product-image w-32 h-32 object-cover rounded"
                src={item.image}/>
              <div className="cart-item-details m-2 ">
                <div className="product-name">
                  {item.name}
                </div>y-option-date text-bold text-blue-500 text-xl mt-2 mb-2
                <div className="product-price text-red-400">
                ${(item.priceCents/100).toFixed(2)}
                </div>
                <div className="product-quantity flex items-center gap-4">
                  <span>
                    Quantity: <span className="quantity-label">{item.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary cursor-pointer hover:border-b border-red-400 hover:text-red-600">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary cursor-pointer hover:border-b border-red-400 hover:text-red-600">
                    Delete
                  </span>
                </div>
              </div>
              </div>
              <div className="flex flex-col border border-blue-500 p-2">
                <div className="delivery-options-title mb-2 font-semibold">
                  Choose a delivery option:
                </div>
                <div className="delivery-option flex items-center ">
                  <input type="radio" value={input}
                    onChange={handleChange}
                    className="delivery-option-input size-4  mr-1"
                    name={item.name}/>
                  <div >
                    <div className="delivery-option-date text-bold text-blue-500 text-lg">
                      Tuesday, June 21
                    </div>
                    <div className="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option flex items-center ">
                  <input type="radio"
                    value={input}
                    onChange={handleChange}
                    className="delivery-option-input size-4"
                    name={item.name}/>
                  <div>
                    <div className="deliver text-bold text-blue-500">
                      Wednesday, June 15
                    </div>
                    <div className="delivery-option-price" ref={shippingPrice}>
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option flex items-center ">
                  <input type="radio"
                  value={input}
                  onChange={handleChange}
                    className="delivery-option-input size-4"
                    name={item.name}
                    />
                  <div>
                    <div className="delivery-option-date text-bold text-blue-500 text-lg">
                      Monday, June 13
                    </div>
                    <div className="delivery-option-price" ref={shippingPrice}>
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )) 
  }
     </div>
     <div className="payment-summary border border-gray-400 p-4 rounded h-fit shadow: shadow-lg">
          <div className="payment-summary-title text-xl font-bold mb-4 text-center">
            Order Summary
          </div>

          <div className="payment-summary-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Items ({cartQuantity}):</div>
            <div className="payment-summary-money">${(totalBeforeTax/100).toFixed(2)}</div>
          </div>

          <div className="payment-summary-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">$4.99</div>
          </div>

          <div className="payment-summary-row subtotal-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Total before tax:</div>
            <div className="payment-summary-money">$47.74</div>
          </div>

          <div className="payment-summary-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">$4.77</div>
          </div>

          <div className="payment-summary-row total-row flex justify-between font-bold text-lg mt-4 text-red-600">
            <div>Order total:</div>
            <div className="payment-summary-money">$52.51</div>
          </div>

          <button className="place-order-button button-primary w-full mt-4 py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
            Place your order
          </button>
     </div>
  </div>
 </div>
    </>
 
            
  )
};