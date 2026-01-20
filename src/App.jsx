import { Navbar } from './components/Navbar'

import { ProductList } from './components/ProductList'
import { Footer } from './components/footer'
import './App.css'
import { Route, Routes } from 'react-router'
import { CheckoutPage } from './components/CheckoutPage'
import { Orders } from './components/Orders'
import { HomePage } from './components/homePage'


function App() {
  

  return (
    <>
  <Routes>
    <Route path='/' element={ <HomePage />} /> 
    <Route path='/checkout' element={ <CheckoutPage />} />
    <Route path='/orders' element={ <Orders />} />

  </Routes>
    {/* < Navbar />

    < ProductList />
    < Footer /> */}
    </>
  )
}

export default App
