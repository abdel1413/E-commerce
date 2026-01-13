export const shoppinCart = () => {
  return (
   <>
   <div className="amazon-header">
   <div className="amazon-header-left-section">
    <a href="" className="cart-link header-link">
        <img src="images/icons/cart-icon.png" alt="Shopping Cart" />
    </a>
   </div>
   <div class="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search"/>

        <button class="search-button">
          <img class="search-icon" src="images/icons/search-icon.png"/>
        </button>
      </div>
      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a class="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src="images/icons/cart-icon.png"/>
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
      </div>
   </>
  );
}   