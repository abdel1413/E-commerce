import { Navbar } from './components/Navbar'



import './App.css'
import { Route, Routes } from 'react-router'
import { CheckoutPage } from './components/CheckoutPage'
import { Orders } from './components/Orders'
import { HomePage } from './components/homePage'
import { Tracking } from './components/Tracking'


function App() {
  

  return (
    <>
    
  <Routes>
    <Route index element={ <HomePage />} /> 
    <Route path='/checkout' element={ <CheckoutPage />} />
    <Route path='/orders' element={ <Orders />} />

    <Route path='/tracking' element={<Tracking/>} />
  </Routes>
    
    </>
  )
}

export default App
