import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

function Products() {
  const [products, setProducts] = useState([]);

  // ✅ CartContext se addToCart lena
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Naksh Jewels</h1>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹ {p.price}</p>
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
