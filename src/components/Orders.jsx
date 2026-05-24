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
            <div 
  className="
    order-header
    flex
    flex-col
    gap-3
    md:flex-row
    md:items-center
    md:justify-between
    py-3
    px-3
    md:px-4
    bg-gray-300
  "
>
            <div
  className="
    order-header-left-section
    flex
    justify-between
    sm:justify-start
    gap-6
    border
    border-gray-400
    p-2
    rounded
    text-sm
  ">
               <div className="order-date">
                <div className="order-header-label font-semibold text-sm">Order Placed:</div>
                <div>{dayjs(order.date).format("dddd, MMMM D")}</div>
               </div>

              <div className="order-total">
                <div className="order-header-label font-semibold text-sm">Total:</div>
                <div>${moneyFormatter(order.total)}</div>
               </div>
            </div>
              <div className="order-header-right-section break-all text-xs sm:text-sm">
               <div className="order-header-label font-semibold text-sm">Order ID:</div>
               <div className="text-sm">{order.id}</div>
            </div>
            </div>
          
            {order.items.map((item)=> (
        <div
  key={item.id}
  className="
    grid
    grid-cols-1
    md:grid-cols-[180px_1fr_180px]
    gap-4
    p-4
    border-b
    border-gray-300
    items-center
  "
>
  
  {/* IMAGE */}
  <div className="w-full h-full">
    <img
      src={`/${item.image}`}
      alt={item.name}
      className="
        w-full
        h-56
        md:h-full
        object-cover
        rounded-lg
      "
    />
  </div>

  {/* DESCRIPTION */}
  
  <div className="min-w-0">
    <div className="font-semibold text-xl mb-2">
      {item.name}
    </div>

    <div className="text-gray-600 mb-2">
      Arriving on:{" "}
      {order.estimatedDeliveryTime
        ? dayjs(order.estimatedDeliveryTime).format("dddd, MMMM D")
        : "N/A"}
    </div>

    <div className="mb-4">
      Quantity: {item.quantity}
    </div>

    <button
      className="
        flex items-center gap-2
        text-white bg-blue-500
        hover:bg-blue-700
        px-4 py-2 rounded-xl
      "
      onClick={() => addToCart(item)}
    >
      <img
        className="w-5 h-5"
        src="images/icons/buy-again.png"
        alt="buy again"
      />
      Buy it again
    </button>
  </div>

  {/* TRACKING */}
  <div className="flex md:justify-end md:items-center">
    <Link to={`/tracking/${item.id}`}>
      <button
        className="
          bg-gray-100
          hover:bg-gray-300
          rounded-xl
          shadow-md
          px-4 py-2
          w-full md:w-auto
        "
      >
        Track package
      </button>
    </Link>
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