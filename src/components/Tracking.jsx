
import dayjs from "dayjs"
import { Link, useParams } from "react-router"


export const Tracking =({orders })=>{
  console.log('orders in tracking page', orders)
 
  const orderId = useParams()
 
 
   //const trackingOrder = orders.map( order => console.log(order.items))
  

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || []
   

    let trackingOrder = savedOrders[0].items.find(item => item.id ===(orderId.id) ) 
    console.log('tracking order', trackingOrder)
    const {name, image, quantity} = trackingOrder

    const deliveryDate = (savedOrders.map(order => order.estimatedDeliveryTime))
   const formattedDeliveryDate = dayjs(deliveryDate[0]).format("dddd, MMMM D")


   

    return (
   
    <div>
    <div className="main w-1/2 mx-auto">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary text-blue-600 border-b border-blue-700 text-xl" to="/orders">
          View all orders
        </Link>

        <div className="delivery-date text-xl text-bold-500 ">
          Arriving on {formattedDeliveryDate}
        </div>

        <div className="product-info">
          
         {name && <div className="product-name">{name}</div>}
          
        </div>

        <div className="product-info">
          Quantity: {quantity || 1}
        </div>

        <img className="product-image w-32 h-32 object-cover rounded p-0 "
        src={image} alt={name}  />
        

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