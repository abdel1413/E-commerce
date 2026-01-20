export const CheckoutPage = () => {
  return (
    <>
    <div className="checkout-header header-container flex items-center px-6 py-4 ">
      <div className="header-content flex justify-between w-full items-center">
        <div className="checkout-header-left-section">
          <a href="amazon.html">
            <img className="amazon-logo" src="./images/icons/amazon-logo.png"/>
            <img className="amazon-mobile-logo" src="images/amazon-mobile-logo.png"/>
          </a>
        </div>
        <div className="checkout-header-middle-section">
          Checkout (<a className="return-to-home-link link-primary font-bold text-lg"
            href="amazon.html">3 items</a>)
        </div>
        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png"/>
        </div>
      </div>
    </div>

    <div className="main checkout-container max-w-7xl mx-auto p-6">
      <div className="page-title text-lg font-bold text-red-400 ">Review your order</div>

      <div className="checkout-grid grid w-full grid-cols-1 md:grid-cols-3 gap-6 p-1">
        <div className="order-summary md:col-span-2">

          <div className="cart-item-container w-800 border border-gray-600 pb-4 mb-4 rounded ">
            <div className="delivery-date text-lg font-semibold mb-2">
              Delivery date: Tuesday, June 21
            </div>
            <div className="cart-item-details-grid  flex justify-around border-red-600 py-2 px-4">
              <div className="flex gap-4 center justify-space-between">

              <img className="product-image w-32 h-32 object-cover rounded"
                src="images/products/athletic-cotton-socks-6-pairs.jpg"/>

              <div className="cart-item-details ">
                <div className="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="product-price">
                  $10.90
                </div>
                <div className="product-quantity flex items-center gap-4">
                  <span>
                    Quantity: <span className="quantity-label">2</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary">
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
                    <div className="delivery-option-date text-bold text-blue-500 text-lg">
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



          <div className="cart-item-container w-800   border border-gray-600 pb-4 mb-4 rounded ">
            <div className="delivery-date text-lg font-semibold mb-2">
              Delivery date: Wednesday, June 15
            </div>

            <div className="cart-item-details-grid  flex justify-around border-red-600 py-2 px-4">
              <div className="flex gap-4 center justify-space-between">
              <img className="product-image w-32 h-32 object-cover rounded"
                src="images/products/intermediate-composite-basketball.jpg"/>

              <div className="cart-item-details">
                <div className="product-name">
                  Intermediate Size Basketball
                </div>
                <div className="product-price">
                  $20.95
                </div>
                <div className="product-quantity flex  gap-4">
                  <span>
                    Quantity: <span className="quantity-label">1</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>
              </div>

              <div className="delivery-options flex flex-col ">
                <div className="delivery-options-title mb-2 font-semibold">
                  Choose a delivery option:
                </div>

                <div className="delivery-option flex items-center ">
                  <input type="radio" className="delivery-option-input"
                    name="delivery-option-2"/>
                  <div>
                    <div className="delivery-option-date text-bold text-blue-500 text-lg">
                      Tuesday, June 21
                    </div>
                    <div className="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option flex items-center ">
                  <input type="radio" checked className="delivery-option-input"
                    name="delivery-option-2"/>
                  <div>
                    <div className="delivery-option-date text-bold text-blue-500 text-lg">
                      Wednesday, June 15
                    </div>
                    <div className="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className="delivery-option flex items-center ">
                  <input type="radio" className="delivery-option-input"
                    name="delivery-option-2"/>
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

        <div className="payment-summary border border-gray-600 p-4 rounded h-fit">
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