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

 
function App() {
  const [cart,setCart] = useState([])

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
   
    setCart(prev => {

 
    const existingProduct = prev.find(item => item.id ===product.id)
    if(existingProduct){
     return  prev.map(item => item.id === product.id 
      ? {...item, quantity:item.quantity+1, }
      : item
     )
    }
    console.log('deliver options', deliverOptions[0])

    return [...prev ,{...product, quantity: 1,deliveryOptionId: deliverOptions[0].id}]
  })
   
 }
 

 const cartQuantity = 
   cart.reduce((acc, next )=> acc + next.quantity, 0)
  const totalPrice = cart.reduce((tot, next)=> tot+(next.priceCents*next.quantity),0)
  
  return (
    <>
    
  <Routes>
    <Route index
     element={ <HomePage 
    cart={cart} 
    addToCart={addToCart} 
    cartQuantity={cartQuantity}/>}
     /> 
    <Route path='/checkout' 
    element={
       <CheckoutPage 
       cart={cart} 
       setCart={setCart}
        cartQuantity={cartQuantity}
        totalPrice={totalPrice}
        />} />

    <Route path='/orders' element={ <Orders />} />
    <Route path='/tracking' element={<Tracking/>} />
  </Routes>
    
    </>
  )
}

export default App
