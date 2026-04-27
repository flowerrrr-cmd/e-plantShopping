import { useState } from "react";

export default function ProductList() {
  const [cartCount, setCartCount] = useState(0);

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
    { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },

    { id: 4, name: "Rose", price: 12, category: "Flowering" },
    { id: 5, name: "Tulip", price: 18, category: "Flowering" },
    { id: 6, name: "Sunflower", price: 22, category: "Flowering" },

    { id: 7, name: "Bonsai", price: 25, category: "Decorative" },
    { id: 8, name: "Cactus", price: 8, category: "Decorative" },
    { id: 9, name: "Fern", price: 14, category: "Decorative" }
  ];

  const [added, setAdded] = useState({});

  const addToCart = (id) => {
    setCartCount(cartCount + 1);
    setAdded({ ...added, [id]: true });
  };

  return (
    <div>
      {/* Navbar */}
      <nav>
        <a href="#">Home</a> | <a href="#">Plants</a> | <a href="#">Cart ({cartCount})</a>
      </nav>

      <h1>Plant List</h1>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>Price: ${plant.price}</p>

          <button 
            onClick={() => addToCart(plant.id)} 
            disabled={added[plant.id]}
          >
            {added[plant.id] ? "Added" : "Add to Cart"}
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}
