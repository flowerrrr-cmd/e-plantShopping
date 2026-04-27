import { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
