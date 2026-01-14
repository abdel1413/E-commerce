
import '../styles/navbar.css'

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md navbar">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
       <div className="amazon-header-right-section">

        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src="./assets/icons/cart-icon.png" alt="cCart" />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
        
      </div>
    </nav>
  );
}