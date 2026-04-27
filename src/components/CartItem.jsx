import { useState } from "react";

export default function CartItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Aloe Vera", price: 10, quantity: 1 },
    { id: 2, name: "Snake Plant", price: 15, quantity: 1 }
  ]);

  const increaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Delete</button>

          <hr />
        </div>
      ))}

      <h2>Total Amount: ${totalAmount}</h2>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}
