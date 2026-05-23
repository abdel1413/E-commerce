import { Link } from "react-router";
import { Navbar } from "./Navbar";
import { moneyFormatter } from "../moneyFormatter";
import dayjs from "dayjs";

export const Orders = ({cart, orders,cartQuantity, addToCart}) => {

  return ( 
    <div className="main px-3 md: px-6 ">
        <Navbar cart={cart} cartQuantity={cartQuantity}/>
      <div className="page-title mb-5 text-2xl mt-5">Your Orders</div>
        { orders.map(order => (  
            <div className="orders-grid mb-6 "  key={order.id}>
            <div className="order-container border border-gray-200 shadow-lg  rounded-lg overflow-hidden">
            <div className="order-header flex flex-col md:flex-row gap-4 md:items-center md:justify-between py-4 px-4 bg-gray-300 ">
            <div className="order-header-left-section flex flex-col sm:flex-row gap-4 border border-gray-400 p-3 rounded">
               <div className="order-date">
                <div className="order-header-label font-semibold text-sm">Order Placed:</div>
                <div>{dayjs(order.date).format("dddd, MMMM D")}</div>
               </div>

              <div className="order-total">
                <div className="order-header-label font-semibold text-sm">Total:</div>
                <div>${moneyFormatter(order.total)}</div>
               </div>
            </div>
              <div className="order-header-right-section break-all">
               <div className="order-header-label font-semibold text-sm">Order ID:</div>
               <div className="text-sm">{order.id}</div>
            </div>
            </div>
          
            {order.items.map((item)=> (
            <div key={item.id}
               className="flex flex-col md:flex-row gap-5 md:items-start md:justify-between">
              <div className="order-product-item flex flex-col sm:flex-row gap-4  w-full">
                <div className="product-image-container w-full sm:w-32 h-32 bg-gray-100 justify-center items-center flex rounded">
                 <img src={`/${item.image}`}
                 alt={item.name}
                  className="h-full object-contain p-2"
                 />
               </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-6 border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl
    hover:border-blue-400
    hover:bg-gray-50
    transition
    duration-300">
        <div className="product-details flex-1 min-w-0 ">
              <div className="product-name font-semibold text-lg mb-2">
                {item.name}
              </div>
              <div className="product-delivery-date text-gray-600 mb-1">
                Arriving on:{" "}
                {order.estimatedDeliveryTime
                  ? dayjs(order.estimatedDeliveryTime).format("dddd, MMMM D")
                  : "N/A"}
              </div>
              <div className="product-quantity mb-4">
                Quantity: {item.quantity}
              </div>
              <button
                className="flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-700 transition duration-300 px-4 py-2 rounded-xl w-fit"
                onClick={() => {
                  addToCart(item);
                }}
              >
                <img
                  className="buy-again-icon w-5 h-5"
                  src="images/icons/buy-again.png"
                  alt="buy again"
                />

                <span className="buy-again-message">
                  Buy it again
                </span>
              </button>
        </div>
        <div className="flex items-center md:justify-end">
            <Link to={`/tracking/${item.id}`}>
              <button
                className="
                  bg-gray-100
                  hover:bg-gray-300
                  rounded-xl
                  shadow-md
                  hover:shadow-xl
                  transition
                  duration-300
                  px-5
                  py-3
                  whitespace-nowrap
                "
              >
                Track package
              </button>
            </Link>
        </div>
        </div>
       </div>
      </div>
            ))
            }
    </div>
  </div>
           )
          ) } 
    
</div>
  );
}