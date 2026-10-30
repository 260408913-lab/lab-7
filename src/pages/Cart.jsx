
import { Link } from "react-router";
import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clear = useCartStore((state) => state.clear);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/products">Continue shopping</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Cart</h1>

      {items.map((item) => (
        <article className="cart-item" key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price.toFixed(2)}</p>

          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(event) =>
                setQuantity(item.id, Number(event.target.value))
              }
            />
          </label>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </article>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button onClick={clear}>Clear cart</button>
    </section>
  );
}
