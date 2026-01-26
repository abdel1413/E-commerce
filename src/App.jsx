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

  

  return (
    <>
    
  <Routes>
    <Route index element={ <HomePage cart={cart} addToCart={addToCart}/>} /> 
    <Route path='/checkout' element={ <CheckoutPage cart={cart} />} />
    <Route path='/orders' element={ <Orders />} />
    <Route path='/tracking' element={<Tracking/>} />
  </Routes>
    
    </>
  )
}

export default App
