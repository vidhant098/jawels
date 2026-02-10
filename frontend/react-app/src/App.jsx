import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import { useCart } from "./CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);
  const { cartCount } = useCart();   // 🔥 counter from context

  return (
    <div>
      {/* Floating Cart Button */}
      <button
        className="cart-btn"
        onClick={() => setShowCart(!showCart)}
        title="Go to Cart"
      >
        🛒
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span>
        )}
      </button>

      {showCart ? <Cart /> : <Products />}
    </div>
  );
}

export default App;
