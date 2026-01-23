import { products } from "../data/product";
import { DropDown } from "./DropDown";
import { Footer } from "./footer";
import { Navbar } from "./Navbar";
// import "../styles/productImages.css";


export const HomePage = () => {

  
return (
    
  //  < div className="max-w-7xl mx-auto mt-8">
  <>
  <Navbar />
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
>  
  
     { products.map((product) => (
    
      
      <div
         className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
         key={product.id}>
        <img
          
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded img-product"
        />
        {console.log(product.rating.stars *10)}
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">${(product.priceCents/100).toFixed(2)}</p>
        <div className="flex gap-2 item-center ">
        
        <img className="ratings w-32 h-5 text-blue-500" src={`/images/ratings/rating-${product.rating.stars*10}.png`}/> <span>{product.rating.count}</span>
        </div>
           
           <DropDown />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
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