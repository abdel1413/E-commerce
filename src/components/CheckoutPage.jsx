import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import { moneyFormatter } from "../moneyFormatter";
import dayjs from "dayjs";
import { cartArray } from "../data/cartArray";
import { deliverOptions } from "../data/deliverOptions";
import { Link } from "react-router";



 
cartArray



export const CheckoutPage = ({cart,setCart, cartQuantity, totalPrice}) => {
 
    
  // const [input, setInput] = useState("")
   const [delivery,setDelivery] = useState([])
   useEffect(()=>{
     axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime').then( response =>
      setDelivery(response.data)
     )

   },[])
  delivery
    //const shippingPrice = useRef(0)


  // const handleDelivery = ()=>{

  // }
 
   
  const handleDeliveryChange = (productId, optionId,priceCents)=>{ 
    
    // const selectedOption = delivery.find(option => option.id === optionId)
      // if(selectedOption){
      //   shippingPrice.current = selectedOption.priceCents
      //   console.log('shipping price', shippingPrice.current)
      // } 

    setCart(prev => prev.map(item =>
      item.id === productId
      ? {...item, deliveryOptionId: optionId, shippingPrice: priceCents}
      : item
      ))
     
      
  }
  const shippingPrice = cart.reduce((acc, next) => acc + (next.shippingPrice || 0), 0)
  console.log('shipping price', shippingPrice, totalPrice)
  const totalBeforeTax = (totalPrice + shippingPrice)
  console.log('total bef',totalBeforeTax)
  const tax = ((totalPrice + shippingPrice)*0.1)
  const orderTotal =(totalBeforeTax + tax )
  console.log('order total', orderTotal)
  
  return (
    <>
    <Navbar />
    <div className="main checkout-container max-w-7xl p-6">
      <div className="page-title text-lg font-bold text-red-400 ">Review your order</div>
      <div className="checkout-grid grid w-full grid-cols-3 md:grid-cols-3 gap-6 p-1">
        <div className="order-summary md:col-span-2">
       { cart.map(item => (
          
          <div className="cart-item-container  w-800 bg-gray-100 border border-gray-300 px-4 mb-5 rounded-lg shadow: shadow-lg dark: text-black "
            key={item.id}>
            <div className="delivery-date text-xl text-blue-500 font-bold mb-2 mt-2 ">
              Delivery date: Tuesday, June 21
            
            </div>
            <div className="cart-item-details-grid  flex gap-4 items-center  py-1 px-1" >
                <img className="product-image w-32 h-32 object-cover rounded p-0 "
                src={item.image}/>
                 <div className="cart-item-details m-2 w-1/3">
                  <div className="product-name">
                    {item.name}
                  </div>
                  <div className="product-price text-red-400">
                  
                       ${moneyFormatter(item.priceCents)}
                 </div>
                <div className="product-quantity flex items-center gap-2">
                  <span className="flex">
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
                
              <div className=" ml-5border border-blue-500 p-2">
                <div className="delivery-options-title mb-2 font-semibold">
                  Choose a delivery option:
                </div>
                
                 {deliverOptions.map(option =>{
 
                    const shipping = option.priceCents <= 0? "Free shipping": `${moneyFormatter(option.priceCents)}-shipping`
                   
                   return( <div key={option.id}
                   className="delivery-option flex items-center ">
                  <input type="radio"
                  key={option.id}
                  checked={option.id === item.deliveryOptionId}
                  onChange={()=>handleDeliveryChange(item.id, option.id,option.priceCents)}
                    className="delivery-option-input size-4"
                    name={`delivery-option-${item.id}`}
                    />
                  <div>
                    <div className="delivery-option-date text-bold text-blue-500 text-lg">
                      {/* Monday, June 13 */}
                      {dayjs(option.estimatedTimeMs).format("dddd, MMMM, D")}
                    </div>
                    <div className="delivery-option-price" >

                      {/* $9.99 - Shipping */}
                      {shipping}

                    </div>
                  </div>
                </div>)
                 })
                 
                 }
                
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
            <div className="payment-summary-money">${moneyFormatter(totalPrice)}</div>
          </div>

          <div className="payment-summary-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">${moneyFormatter(shippingPrice)}</div>
          </div>

          <div className="payment-summary-row subtotal-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Total before tax:</div>
            <div className="payment-summary-money">${moneyFormatter(totalBeforeTax)}</div>
          </div>

          <div className="payment-summary-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">${moneyFormatter(tax)}</div>
          </div>

          <div className="payment-summary-row total-row flex justify-between font-bold text-lg mt-4 text-red-600">
            <div>Order total:</div>
            <div className="payment-summary-money">${moneyFormatter(orderTotal)}</div>
          </div>
            <Link to='/orders'>
          <button className="place-order-button button-primary w-full mt-4 py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
            Place your order
          </button>
          </Link>
     </div>
  </div>
 </div>
    </>
 
            
  )
};