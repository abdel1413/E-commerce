import { products } from "../data/product";

 console.log(products);
export const ProductList = () => {
  return (
    
      products.map((product) => (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
         key={product.id}>
      {/* Example Product Card */}
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
        <img
          
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 className="text-lg font-semibold mb-2">${product.name}</h3>
        <p className="text-gray-600 mb-4">${product.priceCents}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
      {/* Repeat Product Cards as needed */}
    </div>
      ))  
    
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    //   {/* Example Product Card */}
    //   <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
    //     <img
    //       // src="https://via.placeholder.com/150"
    //       src="./data/components/athletic-cotton-socks-6-pairs.jpg"
    //       alt="Product"
    //       className="w-full h-48 object-cover mb-4 rounded"
    //     />
    //     <h3 className="text-lg font-semibold mb-2">Product Name</h3>
    //     <p className="text-gray-600 mb-4">$29.99</p>
    //     <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300">
    //       Add to Cart
    //     </button>
    //   </div>
    //   {/* Repeat Product Cards as needed */}
    // </div>
  );
};