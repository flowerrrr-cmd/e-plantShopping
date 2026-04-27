import { useState } from "react";

export default function CartItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Aloe Vera", price: 10, quantity: 1, img: "https://picsum.photos/100?1" },
    { id: 2, name: "Snake Plant", price: 15, quantity: 2, img: "https://picsum.photos/100?2" }
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Remove item
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Total amount
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Navbar */}
      <nav>
        <a href="#">Home</a> | 
        <a href="#">Plants</a> | 
        <a href="#">Cart</a>
      </nav>

      <h1>Shopping Cart</h1>

      {items.map(item => (
        <div key={item.id}>
          <img src={item.img} width="80" />

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

      <button onClick={() => window.location.href = "/"}>
        Continue Shopping
      </button>
    </div>
  );
}
