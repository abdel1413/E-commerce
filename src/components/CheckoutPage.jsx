import {  useState } from "react";
import { Navbar } from "./Navbar";
//import axios from "axios";
import { moneyFormatter } from "../moneyFormatter";
import dayjs from "dayjs";
import { cartArray } from "../data/cartArray";
import { deliverOptions } from "../data/deliverOptions";

import { Link } from "react-router";

cartArray

export const CheckoutPage = ({cart,setCart, calculateOrderTotal, cartQuantity, handleQuantity, totalPrice, handlePlaceOrder}) => {
  const [editId, setEditId] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [delivery,setDelivery] = useState([])
 

 const {shippingPrice, totalBeforeTax, tax,total} = calculateOrderTotal(cart)

  const handleEdit = (item)=>{
    setEditId(item.id)
    setInputValue(item.quantity)
 
  
  } 



  // const [input, setInput] = useState("")
  //  useEffect(()=>{
  //    axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime').then( response =>
  //     setDelivery(response.data)
  //    )

  //  },[])
 delivery
 setDelivery
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


  const estimatedDeliveryTimes = cart.map(item => {
    const option = deliverOptions.find(option => option.id === item.deliveryOptionId)
  
    return option ? dayjs(option.estimatedDeliveryTimeMs).format("dddd, MMMM D") : "N/A"
  })

  return (
    <>
    <Navbar />
    <div className="main checkout-container max-w-7xl mx-auto px-3 md:px-6 py-6">
      <div className="page-title text-lg font-bold text-red-400 ">Review your order</div>
      <div className="checkout-grid grid w-full grid-cols-1 md:grid-cols-3 gap-6 p-1">
        <div className="order-summary md:col-span-2">
       { cart.map(item => (
          <div className="cart-item-container  w-full bg-gray-100 border border-gray-300 px-4 mb-5 rounded-lg shadow: shadow-lg dark: text-black "
            key={item.id}>
            <div className="delivery-date text-xl text-blue-500 font-bold mb-2 mt-2 ">
              Delivery date: {estimatedDeliveryTimes[cart.indexOf(item)]}
            </div>
            <div className="cart-item-details-grid  flex flex-col lg: flex-row gap-6  py-4" >
                <div className="flex flex-col sm:flex-row gap-4 flex-1">

                    <img className="product-image  w-full sm:w-32 h-32 object-contain p-2"
                    alt={item.name}
                    src={item.image}/>

                    <div className="cart-item-details flex-1">
                        <div className="product-name font-semibold text-lg mb-2">
                          {item.name}
                        </div>
                          <div className="product-price text-red-400 font-bold mb-3">
                      
                          ${moneyFormatter(item.priceCents)}
                        </div>
                    {editId === item.id ? (
                      <div className="product-quantity flex-wrap items-center gap-2">
                        <input
                          type="number"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          className="quantity-input border border-gray-400 rounded px-2 py-1 w-24"
                        />
                        <span
                          onClick={() => {
                            handleQuantity(item.id, inputValue)
                            setEditId(null)
                          }}
                          className="update-button button-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded cursor-pointer">
                          Save
                        </span>
                        <span
                          onClick={() => {
                            handleQuantity(item.id, item.quantity)
                            setEditId(null)
                          }}
                          className="delete-button button-primary bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 rounded cursor-pointer">
                          Cancel
                        </span> 
                      </div>
                    ):
                    <div className="product-quantity flex flex-wrap items-center gap-3">
                        <span className="flex">
                          Quantity: <span className="quantity-label mt-1">{item.quantity}</span>
                        </span>
                        <span
                        onClick={()=>handleEdit(item)}
                        className="update-quantity-link link-primary cursor-pointer hover:border-b border-red-400 hover:text-red-600">
                          Update
                        </span>
                        <span 
                            className="delete-quantity-link link-primary cursor-pointer hover:border-b border-red-400 hover:text-red-600"
                            onClick={()=>{
                              setCart(prev => prev.filter(cartItem => cartItem.id !== item.id))
                            }}
                            >
                            Delete
                        </span>
                    </div> 
                    }
                      </div>


                      <div className="w-full lg: w-80 border border-gray-300 rounded-lg p-4 h-fit">
                        <div className="delivery-options-title mb-3 font-semibold">
                          Choose a delivery option:
                        </div>
                        
                        {deliverOptions.map(option =>{
            
                            const shipping = option.priceCents <= 0? "Free shipping": `${moneyFormatter(option.priceCents)}-shipping`
                          
                          return(
                             <div key={option.id}
                              className="delivery-option flex items-start gap-3 mb-4">
                              <input type="radio"
                              key={option.id}
                              checked={option.id === item.deliveryOptionId}
                              onChange={()=>handleDeliveryChange(item.id, option.id,option.priceCents)}
                                className="delivery-option-input mt-1 size-4"
                                name={`delivery-option-${item.id}`}
                                />
                              <div>
                               <div className="delivery-option-date font:semibold text-blue-500">
                                  {/* Monday, June 13 */}
                                  {/* {dayjs(option.estimatedDeliveryTimeMs).format("dddd, MMMM D")} */}
                                {dayjs().add(option.deliveryDays, "day").format("dddd, MMMM D")
            }
                            </div>
                            <div className="delivery-option-price text-sm text-gray-600" >
                              {shipping}

                            </div>
                          </div>
                        </div>)
                        })
                        
                        }
                        
                      </div>


                </div>
                
            </div>
          </div>
    )) 
  }
     </div>
     <div className="payment-summary border border-gray-400 p-4 rounded h-fit shadow:shadow-lg">
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
            <div className="payment-summary-money">${moneyFormatter(total)}</div>
          </div>
            <Link to='/orders'>
              <button onClick={()=>handlePlaceOrder()}
              className="place-order-button button-primary w-full mt-4 py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
                Place your order
              </button>
          </Link>
     </div>
  </div>
 </div>
    </>
 
            
  )
};