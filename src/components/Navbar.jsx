
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md navbar">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
       <div class="amazon-header-right-section">

        <a class="orders-link header-link" href="orders.html">
          <span class="returns-text">Returns</span>
          <span class="orders-text">& Orders</span>
        </a>

        <a class="cart-link header-link" href="checkout.html">
          <img class="cart-icon" src="images/icons/cart-icon.png" alt="Shopping Cart" />
          <div class="cart-quantity">3</div>
          <div class="cart-text">Cart</div>
        </a>
      </div>
        
      </div>
    </nav>
  );
}