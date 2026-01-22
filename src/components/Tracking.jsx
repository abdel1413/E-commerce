import { Link } from "react-router"

export const Tracking =()=>{
    return (
   
    <div>
    <div className="main w-1/2 mx-auto">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary text-blue-600 border-b border-blue-700 text-xl" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date text-xl text-bold-500 ">
          Arriving on Monday, June 13
        </div>

        <div className="product-info">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>

        <div className="product-info">
          Quantity: 1
        </div>

        <img className="product-image w-32 h-32 m-5" 
        src="images/products/athletic-cotton-socks-6-pairs.jpg"/>

        <div className="progress-labels-container flex justify-between">
          <div className="progress-label">
            Preparing
          </div>
          <div className="progress-label current-status">
            Shipped
          </div>
          <div className="progress-label">
            Delivered
          </div>
        </div>

        <div className="progress-bar-container w-full max-w-md h-5 bg-gray-200 rounded-full overflow-hidden mt-2 ">
          <div className=" w-full progress-bar h-full bg-blue-300 transition-all duration-300" style={{width:"50%"}}>
          </div>
        </div>
       
      </div>
    </div>
  
    </div>
)
}