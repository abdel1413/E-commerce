import {  useEffect, useState } from "react";
import { products } from "../data/product";
import { DropDown } from "./DropDown";
import { Navbar } from "./Navbar";
import { useDebounce } from "./useDebounce";

 
export const HomePage = () => {
  const [searchItem, setSearchItem]=useState('')
  const [debounce,setDebounce] = useState('')
  const [cart,setCart] = useState([])
 

  // using debounce hook for reusability
    const useDeb =  useDebounce(searchItem, 500)
    console.log('debounce',useDeb)

  //use debounce to avoid filtering on every key stoke;
 useEffect(()=>{
  let timer = setTimeout(()=>{setDebounce(searchItem)},500)
  return ()=>clearTimeout(timer)
 },[searchItem])

 console.log(debounce)
 
 const filtered = products.filter(product =>{
 return product.name.toLowerCase().includes(debounce.toLowerCase())
 })
 

 const addToCart = (product)=>{
  console.log('pr', product)
  //setCart(...prev +1 )
  setCart(prev => {
    console.log('prev vv', prev)
    const existingProduct = prev.find(item => item.id ===product.id)
    console.log(existingProduct)
    if(existingProduct){
     return  prev.map(item => item.id ==product.id 
      ? {...item, quantity:item.quantity+1}
      : item
     )
    }
    console.log('add', prev)
    return [...prev ,{product, quantity: 1}]
  })

  
 }

return (
    
  <>
  <Navbar  searchItem={searchItem} setSearchItem={setSearchItem} cart={cart}/>
     {  filtered.length ===0 &&
      <div className=" min-h-screen w-full grid grid-cols-1 flex items-center justify-center">
         <h1 className="text-red-500 text-xl text-center">No product found!</h1>
      </div>
}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
>
      
     { 
      filtered.map((product) => (
      <div
         className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
         key={product.id}>
        <img
          
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded img-product"
        />
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 mb-4">${(product.priceCents/100).toFixed(2)}</p>
        <div className="flex gap-2 item-center ">
        
        <img className="ratings w-32 h-5 text-blue-500" src={`/images/ratings/rating-${product.rating.stars*10}.png`}/> <span>{product.rating.count}</span>
        </div>
           
           <DropDown />
        <button
        onClick={()=>addToCart(product)}
         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
     
      ))  }
    </div>
    {/* <Footer /> */}
    </>
// </div>
    
  );
};