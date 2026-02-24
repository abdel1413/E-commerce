import { Navbar } from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router'
import { CheckoutPage } from './components/CheckoutPage'
import { Orders } from './components/Orders'
import { HomePage } from './components/homePage'
import { Tracking } from './components/Tracking'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { deliverOptions } from './data/deliverOptions'
import dayjs from 'dayjs'
import { Navigate } from 'react-router'



 
function App() {
  const [cart,setCart] = useState([])
  const[orderId, setOrderId] = useState(null)
  const [orders, setOrders] = useState([])
  const [quantity, setQuantity] = useState({})
  

  useEffect(()=> {
    fetch("http://localhost:3000/api/products")
    .then(resp =>{
      return resp.json()})
    .then(data =>(data))


  },[])

  useEffect(()=>{
    axios.get("http://localhost:3000/api/products").then(resp=> resp.data)
    axios.get('http://localhost:3000/api/cart-items?expand=product').then(resp => resp.data)
    
  },[])

  
  const addToCart = (product)=>{
    const selectedQuantity = quantity[product.id] || 1  
    
    setCart(prev => {
    const existingProduct = prev.find(item => item.id ===product.id)

    if(existingProduct){
     return  prev.map(item => item.id === product.id 
      ? {...item, quantity:selectedQuantity, }
      : item
     )
    }

    return [
      ...prev ,
      {...product, 
        quantity: selectedQuantity
        ,deliveryOptionId: deliverOptions[0].id}]
  })
   
 }
 
 const handlePlaceOrder = ()=>{
  // Here you would typically send the order data to your backend server
  // For this example, we'll just clear the cart

  // const orderId = Math.random().toString(36).substring(2, 15)
  // console.log('Order ID:', orderId)
  const orderId2 = crypto.randomUUID()
  setOrderId(orderId2)
  const newOrder = {
    id: orderId2,
    items: cart,
    date: new Date(),
    orderDate: dayjs().valueOf(),
    estimatedDeliveryTime: dayjs().add(7, 'day').valueOf(),
    status: 'Processing'
    

 }  
 setOrders(prev => [...prev, newOrder])
   
     Navigate(`/tracking/${orderId2}`);
   setCart([])
   setQuantity({})
 }    

 const handleQuantity = (productId, newQuantity)=>{
  setQuantity(prev => ({...prev, [productId]: Number(newQuantity)}))

  setCart(prev => prev.map(item => 
    item.id === productId
    ? {...item, quantity:Number(newQuantity)}
    : item
    ))
 }  

 const updateQuantity = (productId, newQuantity)=>{
  setCart(prev => prev.map(item =>{
  
    return item.id === productId
    ? {...item, quantity:Number(newQuantity)}
    : item  

  }
   
    ))
 }
 const cartQuantity = 
   cart.reduce((acc, next )=> acc + next.quantity, 0)
  
  const totalPrice = cart.reduce((tot, next)=> tot+(next.priceCents*next.quantity),0)
  
  return (
    <>
    
  <Routes>
    <Route index
     element={ 
     <HomePage 
    cart={cart} 
    addToCart={addToCart} 
    handleQuantity={handleQuantity}
    cartQuantity={cartQuantity}
    quantity={quantity}/>}
     /> 
    <Route path='/checkout' 
    element={
       <CheckoutPage 
       cart={cart} 
       setCart={setCart}
        cartQuantity={cartQuantity}
        totalPrice={totalPrice}
        handlePlaceOrder={handlePlaceOrder}
        handleQuantity={handleQuantity}
        setQuantity={setQuantity}
        updateQuantity={updateQuantity}
        />} />

    <Route path='/orders' 
    element={ 
    <Orders 
    cart={cart} 
    totalPrice={totalPrice}
     orderId={orderId}
     addToCart={addToCart}
     orders={orders}
     setOrders={setOrders}
    
    />} 
    />
    <Route path='/tracking:orderId' element={<Tracking orders={orders}/>} />
  </Routes>
    
    </>
  )
}

export default App
