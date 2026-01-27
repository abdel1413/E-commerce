import { Navbar } from './components/Navbar'



import './App.css'
import { Route, Routes } from 'react-router'
import { CheckoutPage } from './components/CheckoutPage'
import { Orders } from './components/Orders'
import { HomePage } from './components/homePage'
import { Tracking } from './components/Tracking'
import { useState } from 'react'


function App() {
  const [cart,setCart] = useState([])

  const addToCart = (product)=>{
  setCart(prev => {
 
    const existingProduct = prev.find(item => item.id ===product.id)
     console.log(existingProduct)
    if(existingProduct){
     return  prev.map(item => item.id ==product.id 
      ? {...item, quantity:item.quantity+1}
      : item
     )
    }
   
    
    return [...prev ,{...product, quantity: 1}]
  })

  
 }

 const cartQuantity = 
   cart.reduce((acc, next )=> acc + next.quantity, 0)
 
   
  const totalBeforeTax = cart.reduce((tot, next)=> tot+(next.priceCents*next.quantity),0)
  console.log('tot', totalBeforeTax)
  return (
    <>
    
  <Routes>
    <Route index element={ <HomePage cart={cart} addToCart={addToCart} cartQuantity={cartQuantity}/>} /> 
    <Route path='/checkout' element={
       <CheckoutPage cart={cart} 
        cartQuantity={cartQuantity}
        totalBeforeTax={totalBeforeTax}
        />} />
    <Route path='/orders' element={ <Orders />} />
    <Route path='/tracking' element={<Tracking/>} />
  </Routes>
    
    </>
  )
}

export default App
