import { Link } from "react-router";
import { Navbar } from "./Navbar";

export const Orders = () => {
  return ( 
    <div className="main">
        <Navbar/>
      <div className="page-title mb-3 text-xl mt-5">Your Orders</div>
   
      <div className="orders-grid  ">
        <div className="order-container border border-gray-200 mb-5 shadow-xl">
          
          <div className="order-header flex w-800 item-center px-4 py-2 justify-between bg-gray-300">
            <div className="flex gap-6">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>August 12</div>
              </div>
              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>$35.06</div>
              </div>
            </div>

            <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
            </div>
          </div>
          <div className="flex flex-col w-800 justify-between item-center px-2 py-6 ">
            <div className="flex justify-between mb-5">
                <div className="flex gap-4">
                    <div className="product-image-container">
                    <img src="images/products/athletic-cotton-socks-6-pairs.jpg" className=" w-32 h-32"/>
                    </div>
                    <div className="product-details">
                        `<div className="product-name">
                            Black and Gray Athletic Cotton Socks - 6 Pairs
                        </div>
                        <div className="product-delivery-date">
                            Arriving on: August 15
                        </div>
                        <div className="product-quantity">
                            Quantity: 1
                        </div>
                        <button className=" flex text-white bg-blue-500 hover:bg-blue-700 transition-color duration-300 px-3 py-2 rounded-xl">
                            <img className="buy-again-icon w-6 h-6" src="images/icons/buy-again.png"/>
                        `  <span className="buy-again-message">Buy it again</span>
                        </button>
                    </div>
                </div>
              <div className="product-actions">
                <Link to="/tracking" className=" border w-25 px-4">
                    <button className="bg-white hover:bg-gray-100 transition duration-200 rounded-xl  w-25 px-3 py-2 shadow-md hover:shadow-xl ">
                    Track package
                    </button>
                </Link>
              </div>
           </div>
             

            <div className="flex justify-between">
                 <div className="flex gap-4">
                <div className="product-image-container">
                <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" className="w-32 h-32"/>
                </div>
                <div className="product-details">
                   <div className="product-name">
                    Adults Plain Cotton T-Shirt - 2 Pack
                   </div>
                   <div className="product-delivery-date">
                    Arriving on: August 19
                   </div>
                  <div className="product-quantity">
                    Quantity: 2
                  </div>
                 <button className=" flex text-white bg-blue-500 hover:bg-blue-700 transition-color duration-300 px-3 py-2 rounded-xl">
                    <img className="buy-again-icon w-6 h-6" src="images/icons/buy-again.png"/>
                    <span className="buy-again-message">Buy it again</span>
                 </button>
                </div>
                  </div>
                
             <div className="product-actions">
               <Link to="/tracking" className=" border w-25 px-4">
                <button className=" bg-white hover:bg-gray-100 shadow-md hover: shadow-xl transition duration-300 rounded-xl  w-25 px-4 py-2 ">
                  Track package
                </button>
               </Link>
             </div>
          </div>
       </div>
          
     </div>


        <div className="order-container border border-gray-200 shadow-lg mb-5">
          <div className="order-header flex w-800 item-center px-4 py-2 justify-between  bg-gray-300 ">
            <div className="order-header-left-section flex gap-4 ">
              <div className="order-date">
                <div className="order-header-label">Order Placed:</div>
                <div>June 10</div>
              </div>

              <div className="order-total">
                <div className="order-header-label">Total:</div>
                <div>$41.90</div>
              </div>
             </div>
             <div className="order-header-right-section">
              <div className="order-header-label">Order ID:</div>
              <div>b6b6c212-d30e-4d4a-805d-90b52ce6b37d</div>
            </div>
          </div>

          <div className=" flex w-800 justify-between item-center px-2 py-6 ">
            <div className="flex gap-4">
                <div className="product-image-container w-32 h-32">
                 <img src="images/products/intermediate-composite-basketball.jpg"/>
                </div>
                <div className="product-details">
                    <div className="product-name">
                        Intermediate Size Basketball
                    </div>
                    <div className="product-delivery-date">
                        Arriving on: June 17
                     </div>
                     <div className="product-quantity">
                        Quantity: 2
                    </div>
                  <button className="flex text-white bg-blue-500 hover:bg-blue-700 transition-color duration-300 px-4 py-2 rounded-xl">
                    <img className="buy-again-icon w-6 h-6" src="images/icons/buy-again.png"/>
                    <span className="buy-again-message">Buy it again</span>
                 </button>
              </div>
           </div>
            {/* <div className="product-actions bg-green-500 border w-25 px-4"> */}
              <Link to="/tracking" className=" w-25 px-4">
                <button className=" bg-white hover:bg-gray-100 rounded-xl  shadow-md hover: shadow-xl  transition  duration-300 w-25 px-4 py-2  ">
                  Track package
                </button>
              </Link>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}