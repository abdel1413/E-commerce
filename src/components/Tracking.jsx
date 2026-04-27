
import dayjs from "dayjs"
import { Link, useParams } from "react-router"


export const Tracking =({orders })=>{
  console.log('orders in tracking page', orders)
 
  const orderId = useParams()
 
 
   //const trackingOrder = orders.map( order => console.log(order.items))
  

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || []
   

    let trackingOrder = savedOrders[0].items.find(item => item.id ===(orderId.id) ) 
    console.log('tracking order', trackingOrder.name, trackingOrder.quantity, trackingOrder.image )
    const {name, image, quantity} = trackingOrder
    console.log('img',image)

    const deliveryDate = (savedOrders.map(order => order.estimatedDeliveryTime))
   const formattedDeliveryDate = dayjs(deliveryDate[0]).format("dddd, MMMM D")



   //create progress bar logic based on order status
   const now = dayjs().valueOf()
  
   const order = savedOrders[0]


   const {orderDate, estimatedDeliveryTime} = order
   const totalTime = estimatedDeliveryTime - orderDate

   const elapsedTime = now - orderDate

   const progressPercentage = Math.min((elapsedTime / totalTime) * 100, 100)  
   

    return (
   
    <div>
    <div className="main w-1/2 mx-auto">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary text-blue-600 border-b border-blue-700 text-xl" to="/orders">
          View all orders
        </Link>

   
    <div className="container mt-6 p-6 bg-gray-100 rounded-lg shadow-lg mb-10">
        <div className="delivery-date text-xl text-bold-500 ">
          Arriving on {formattedDeliveryDate}
        </div>

        <div className="product-info">
          
         {name && <div className="product-name">{name}</div>}
          
        </div>

        <div className="product-info">
          Quantity: {quantity || 1}
        </div>

        <img className="product-image w-40 h-40 object-cover rounded p-0  border border-gray-300  shadow: shadow-lg dark: text-black "
        src={`/${image}`}/>

        </div>

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
          <div className=" w-full progress-bar h-full bg-blue-300 transition-all duration-300" style={{width: `${progressPercentage}%`}}>
          </div>
        </div>
       
      </div>
    </div>
  
    </div>
)
}