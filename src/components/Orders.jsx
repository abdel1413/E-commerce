import { Link } from "react-router";
import { Navbar } from "./Navbar";
import { moneyFormatter } from "../moneyFormatter";

export const Orders = ({cart,totalPrice, orderId}) => {
  console.log(' orders',orderId )
  return ( 
    <div className="main">
        <Navbar/>
      <div className="page-title mb-3 text-xl mt-5">Your Orders</div>
      <div className="orders-grid  ">
        <div className="order-container border border-gray-200 shadow-lg mb-5">
          <div className="order-header flex w-800 item-center px-4 py-2 justify-between  bg-gray-300 ">
            <div className="order-header-left-section flex gap-4 ">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>June 10</div>
              </div>

              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>${moneyFormatter(totalPrice)}</div>
              </div>
             </div>
             <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>{orderId}</div>
            </div>
          </div>
            {cart.map((item)=> (
          <div key={item.id}
           className=" flex w-800 justify-between item-center px-2 py-6 ">
            <div key={item.id} className="order-product-item flex gap-4 mb-4">
              <div className="product-image-container w-32 h-32">
               <img src={item.image}/>
              </div>
              <div className="product-details">
                  <div className="product-name">
                      {item.name}
                  </div>
                  <div className="product-delivery-date">
                      Arriving on: June 17
                   </div>
                   <div className="product-quantity">
                      Quantity: {item.quantity}
                  </div>
                <button className="flex text-white bg-blue-500 hover:bg-blue-700 transition-color duration-300 px-4 py-2 rounded-xl">
                  <img className="buy-again-icon w-6 h-6" src="images/icons/buy-again.png"/>
                  <span className="buy-again-message">Buy it again</span>
               </button>
            </div>
          </div>
          <Link to="/tracking" className=" w-25 px-4">
                <button className=" bg-white hover:bg-gray-100 rounded-xl  shadow-md hover: shadow-xl  transition  duration-300 w-25 px-4 py-2  ">
                  Track package
                </button>
              </Link>
        </div>
            ))
            }
      </div>
    </div>
    </div>
  );
}