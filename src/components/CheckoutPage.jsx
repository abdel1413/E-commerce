import { Navbar } from "./Navbar";

export const CheckoutPage = ({cart}) => {
  
  return (
    <>
    <Navbar />
  
    <div className="main checkout-container max-w-7xl mx-auto p-6">
      <div className="page-title text-lg font-bold text-red-400 ">Review your order</div>
      <div className="checkout-grid grid w-full grid-cols-1 md:grid-cols-3 gap-6 p-1">

       { cart.map(item => (
        <div className="order-summary md:col-span-2">
          <div className="cart-item-container w-800 bg-gray-100 border border-gray-300 px-4 mb-5 rounded-lg shadow: shadow-lg  ">
            <div className="delivery-date text-xl text-blue-500 font-bold mb-2 mt-2 ">
              Delivery date: Tuesday, June 21
            </div>
            <div className="cart-item-details-grid  flex justify-around border-red-600 py-2 px-4">
              <div className="flex gap-4 center justify-space-between">

              <img className="product-image w-32 h-32 object-cover rounded"
                src={item.image}/>

              <div className="cart-item-details ">
                <div className="product-name">
                  {item.name}
                </div>
                <div className="product-price">
                {item.price}
                </div>
                <div className="product-quantity flex items-center gap-4">
                  <span>
                    Quantity: <span className="quantity-label">{item.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary cursor-pointer hover:border-b border-gray-400">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary cursor-pointer hover:border-b border-gray-400">
                    Delete
                  </span>
                </div>
              </div>
              </div>
              <div className="delivery-options flex flex-col">
                <div className="delivery-options-title mb-2 font-semibold">
                  Choose a delivery option:
                </div>
                <div className="delivery-option flex items-center ">
                  <input type="radio" checked
                    className="delivery-option-input"
                    name="delivery-option-1"/>
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
                    className="delivery-option-input"
                    name="delivery-option-1"/>
                  <div>
                    <div className="delivery-option-date text-bold text-blue-500 text-xl mt-2 mb-2">
                      Wednesday, June 15
                    </div>
                    <div className="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option flex items-center ">
                  <input type="radio"
                    className="delivery-option-input"
                    name="delivery-option-1"/>
                  <div>
                    <div className="delivery-option-date text-bold text-blue-500 text-lg">
                      Monday, June 13
                    </div>
                    <div className="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )) 
  }
     <div className="payment-summary border border-gray-400 p-4 rounded h-fit shadow: shadow-lg">
          <div className="payment-summary-title text-xl font-bold mb-4 text-center">
            Order Summary
          </div>

          <div className="payment-summary-row flex justify-between mb-2 border-b border-gray-300 pb-2">
            <div>Items (3):</div>
            <div className="payment-summary-money">$42.75</div>
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