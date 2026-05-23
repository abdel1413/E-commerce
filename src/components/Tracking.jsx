import dayjs from "dayjs"
import { Link, useParams } from "react-router"


export const Tracking =()=>{
  const orderId = useParams() 
  
    // const savedOrders = JSON.parse(localStorage.getItem("orders")) || []
    const savedOrders = JSON.parse(localStorage.getItem("orders")|| "[]") 
   
    //let trackingOrder = savedOrders[0].items.find(item => item.id ===(orderId.id) ) 
    //using flatmap to create a single array of all items from all orders
    const allItems = savedOrders.flatMap(order => order.items)

     const trackingItem = allItems.find(item => String(item.id) === String(orderId.id))
     if (!trackingItem) {
      return <div className="text-red-500 text-xl font-bold flex items-center justify-center h-screen">No tracking information available for this order.</div>
     }
   
    const {name, image,} = trackingItem || {}
  
    const deliveryDate = (savedOrders.flatMap(order => order.estimatedDeliveryTime))
    
   const formattedDeliveryDate = dayjs(deliveryDate[0]).format("dddd, MMMM D")


   //create progress bar logic based on order status
   const now = dayjs().valueOf()
  
  
   const order = savedOrders[0]

    
  //  const {orderDate, estimatedDeliveryTime} = order
   const orderDate = order?.orderDate;

   const estimatedDeliveryTime = order?.estimatedDeliveryTime;  

   if (!orderDate || !estimatedDeliveryTime) {
    return <div className="text-red-500 text-xl font-bold flex items-center justify-center h-screen">No order details available.</div>
   }
   const totalTime = estimatedDeliveryTime - orderDate

   const elapsedTime = now - orderDate

   const progressPercentage = totalTime > 0 
   ? Math.min((elapsedTime / totalTime) * 100, 100)
    : 0
  //  Math.min((elapsedTime / totalTime) * 100, 100)  
  
    return (
   
    <div>
    <div className="main w-full max-w-3xl mx-auto px-4">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary text-blue-600 border-b border-blue-700 text-xl" to="/orders">
          View all orders
        </Link>

    <div className="container mt-6 p-6 bg-gray-100 rounded-lg shadow-lg mb-10">
        <div className="delivery-date text-xl text-bold-500 ">
          Arriving on<span className="text-blue-700 text-xl font-bold "> {formattedDeliveryDate}</span>
        </div>

        <div className="product-info">
          
         {name && <div className="product-name text-lg">{name}</div>}
          
        </div>

        {/* <div className="product-info">
          Quantity: {quantity || 1}
        </div> */}

        <div className=" relative w-full max-w-[180px] aspect-square mx-auto mt-6 mb-6 flex items-center justify-center mt-6 mb-6 mx-auto rounded-xl p-[3px] bg-[conic-gradient(red,orange,yellow,green,blue,purple,red)] animate-[spin_99s_linear_infinite]" >
          <div className="rounded-xl bg-white  mb-6flex items-center justify-center p-[2px]">
            <img className="product-image absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rounded-xl z-20 "
                src={`/${image}`}/>
          </div>
        </div>
        </div>
        <div className="progress-labels-container flex justify-between text-sm md:text-base gap-2 mt-4 ">
          <div className="progress-label flex-1 text-left current-status">
            Preparing
          </div>
          <div className="progress-label current-status flex-1 text-center">
            Shipped
          </div>
          <div className="progress-label flex-1 text-right current-status">
            Delivered
          </div>
        </div>

        <div className="progress-bar-container w-full  h-5 bg-gray-200 rounded-full  mt-2 ">
          <div className=" w-full progress-bar h-full bg-blue-300 transition-all duration-300" style={{width: `${progressPercentage}%`}}>
          </div>
        </div>
       
      </div>
    </div>
  
    </div>
)
}