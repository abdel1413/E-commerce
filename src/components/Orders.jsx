export const Orders = () => {
  return (
    <div className="orders-page-container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="order-item border-b border-gray-300 pb-4 mb-4">
        <h2 className="text-xl font-semibold">Order #123456</h2>
        <p className="text-gray-600">Placed on: January 15, 2024</p>
        <p className="text-gray-600">Total: $150.00</p>
        <div className="ordered-products mt-4">
          <div className="product-item flex items-center mb-2">
            <img
              src="images/products/product1.jpg"
              alt="Product 1"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="font-semibold">Product Name 1</h3>
              <p className="text-gray-600">Quantity: 2</p>
              <p className="text-gray-600">Price: $50.00</p>
            </div>
          </div>
          <div className="product-item flex items-center">
            <img
              src="images/products/product2.jpg"
              alt="Product 2"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="ml-4">
              <h3 className="font-semibold">Product Name 2</h3>
              <p className="text-gray-600">Quantity: 1</p>
              <p className="text-gray-600">Price: $50.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* Additional orders can be added here */}
    </div>
  );
}