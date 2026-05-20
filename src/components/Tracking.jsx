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
   
    const {name, image, quantity} = trackingItem || {}
  
    const deliveryDate = (savedOrders.flatMap(order => order.estimatedDeliveryTime))
    
   const formattedDeliveryDate = dayjs(deliveryDate[0]).format("dddd, MMMM D")


   //create progress bar logic based on order status
   const now = dayjs().valueOf()
  
  
   const order = savedOrders[0]
   console.log("savedOrders:", savedOrders);
    
  //  const {orderDate, estimatedDeliveryTime} = order
   const orderDate = order?.orderDate;
   console.log("order:", orderDate);
   const estimatedDeliveryTime = order?.estimatedDeliveryTime;  
   console.log("orderDate:", orderDate);
   console.log("estimatedDeliveryTime:", estimatedDeliveryTime);
   console.log("now:", now);

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
    <div className="main w-1/2 mx-auto">
      <div className="order-tracking">
        <Link className="back-to-orders-link link-primary text-blue-600 border-b border-blue-700 text-xl" to="/orders">
          View all orders
        </Link>

    <div className="container mt-6 p-6 bg-gray-100 rounded-lg shadow-lg mb-10">
        <div className="delivery-date text-xl text-bold-500 ">
          Arriving on<span className="text-blue-700 text-xl font-bold "> {formattedDeliveryDate}</span>
        </div>

        <div className="product-info">
          
         {name && <div className="product-name text-lg  ">{name}</div>}
          
        </div>

        <div className="product-info">
          Quantity: {quantity || 1}
        </div>

        <div className=" w-44 h-40 flex items-center justify-center mt-6 mb-6 mx-auto rounded-xl p-[3px] bg-[conic-gradient(red,orange,yellow,green,blue,purple,red)] animate-[spin_99s_linear_infinite]" >
          
          <div className="rounded-xl bg-white w-full h-full flex items-center justify-center p-[2px]">
            <img className="product-image w-full h-full  object-cover rounded-xl p-0  text-black "
                src={`/${image}`}/>
          </div>
        </div>
        
        
     {/* <div className="relative w-44 h-40 mt-6 mb-6 mx-auto rounded-xl overflow-hidden">
      
          <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
            <div className="w-full h-full bg-[conic-gradient(red,orange,yellow,green,blue,purple,red)]"></div>
          </div>
          <div className="absolute inset-[3px] bg-white rounded-xl z-10"></div>
        <img
          className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover rounded-xl z-20"
          src={`/${image}`}
          alt={name}
        />
      </div> */}

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

        <div className="progress-bar-container w-full  h-5 bg-gray-200 rounded-full  mt-2 ">
          <div className=" w-full progress-bar h-full bg-blue-300 transition-all duration-300" style={{width: `${progressPercentage}%`}}>
          </div>
        </div>
       
      </div>
    </div>
  
    </div>
)
}