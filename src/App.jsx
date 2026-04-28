import { Navbar } from './components/Navbar'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router'
import { CheckoutPage } from './components/CheckoutPage'
import { Orders } from './components/Orders'
import { HomePage } from './components/homePage'
import { Tracking } from './components/Tracking'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { deliverOptions } from './data/deliverOptions'
import dayjs from 'dayjs'




 
function App() {
  const [cart,setCart] = useState(() => {
    try {
      
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []

    } catch (error) {
      console.error('Error parsing cart from localStorage:', error)
     return [] 
    }
  })
  const[orderId, setOrderId] = useState(null)

  const [orders, setOrders] = useState(() => { 
    const savedOrders = localStorage.getItem('orders')
    return savedOrders ? JSON.parse(savedOrders) : []
  })
  
  // const [quantity, setQuantity] = useState(() => {
  //   const savedQuantities = localStorage.getItem('quantity')
  //   return savedQuantities ? JSON.parse(savedQuantities) : {}
  // })
  

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

  // Persist cart to localStorage whenever it changes
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart]) 

  // Persist quantities to localStorage whenever they change
  // useEffect(()=>{
  //   localStorage.setItem('quantity', JSON.stringify(quantity))
  // },[quantity])

  useEffect(()=>{
    localStorage.setItem('orders', JSON.stringify(orders))
  },[orders])

  const addToCart = (product)=>{
    
    
    setCart(prev => {
      const existingProduct = prev.find(item => item.id ===product.id)
      
      // const selectedQuantity = quantity[product.id] || 1  
    const selectedQuantity = 1  

    if(existingProduct){
     return  prev.map(item => item.id === product.id 
      ? {...item, quantity: (item.quantity||0 )+ selectedQuantity, }
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
 
 const navigate =  useNavigate()

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
 setOrders(prev => {
  const updatedOrders = [...prev, newOrder]
  localStorage.setItem('orders', JSON.stringify(updatedOrders))
  return updatedOrders
  })
   
     navigate(`/tracking/${orderId2}`);
   setCart([])
  //  setQuantity({})
 
 }    




 const handleQuantity = (productId, newQuantity)=>{
  //setQuantity(prev => ({...prev, [productId]: Number(newQuantity)||0}))

  setCart(prev => prev.map(item => 
    item.id === productId
    ? {...item, quantity:Number(newQuantity)||0}
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
//  const cartQuantity = useMemo(()=> (cart||[]).reduce((acc, next )=> acc +(Number(next.quantity)||0), 0), [cart])
  const cartQuantity = (cart||[]).reduce((acc, next )=> acc +(Number(next.quantity)||0), 0)
   
  
  const totalPrice =( cart ||[]).reduce((tot, next)=> tot+ ((next.priceCents)*(Number(next.quantity)||0)),0)
  
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
   />}
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
  Ç
    <Route path='/tracking/:id' 
    element={
    <Tracking orders={orders}
    />}
     />
  </Routes>
    
    </>
  )
}

export default App
