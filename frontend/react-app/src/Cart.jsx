import { useCart } from "./CartContext";

function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Cart is empty</h2>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderBottom: "1px solid #ddd",
            padding: "12px 0",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "80px" }}
          />

          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>
          </div>

          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              updateQty(item.id, Number(e.target.value))
            }
            style={{ width: "60px" }}
          />

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>
    </div>
  );
}

export default Cart;
