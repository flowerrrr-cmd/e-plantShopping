import { useState } from "react";

export default function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState({});

  const plants = {
    Indoor: [
      { id: 1, name: "Aloe Vera", price: 10, img: "https://picsum.photos/100?1" },
      { id: 2, name: "Snake Plant", price: 15, img: "https://picsum.photos/100?2" },
      { id: 3, name: "Peace Lily", price: 20, img: "https://picsum.photos/100?3" },
      { id: 4, name: "Spider Plant", price: 12, img: "https://picsum.photos/100?4" },
      { id: 5, name: "Fern", price: 18, img: "https://picsum.photos/100?5" },
      { id: 6, name: "Palm", price: 22, img: "https://picsum.photos/100?6" }
    ],
    Flowering: [
      { id: 7, name: "Rose", price: 10, img: "https://picsum.photos/100?7" },
      { id: 8, name: "Tulip", price: 15, img: "https://picsum.photos/100?8" },
      { id: 9, name: "Sunflower", price: 20, img: "https://picsum.photos/100?9" },
      { id: 10, name: "Lily", price: 12, img: "https://picsum.photos/100?10" },
      { id: 11, name: "Daisy", price: 18, img: "https://picsum.photos/100?11" },
      { id: 12, name: "Orchid", price: 22, img: "https://picsum.photos/100?12" }
    ],
    Decorative: [
      { id: 13, name: "Bonsai", price: 25, img: "https://picsum.photos/100?13" },
      { id: 14, name: "Cactus", price: 8, img: "https://picsum.photos/100?14" },
      { id: 15, name: "Succulent", price: 14, img: "https://picsum.photos/100?15" },
      { id: 16, name: "Money Plant", price: 10, img: "https://picsum.photos/100?16" },
      { id: 17, name: "Areca Palm", price: 18, img: "https://picsum.photos/100?17" },
      { id: 18, name: "Rubber Plant", price: 22, img: "https://picsum.photos/100?18" }
    ]
  };

  const addToCart = (id) => {
    setCartCount(cartCount + 1);
    setAdded({ ...added, [id]: true });
  };

  return (
    <div>
      <nav>
        <a href="#">Home</a> | 
        <a href="#">Plants</a> | 
        <a href="#">Cart ({cartCount})</a>
      </nav>

      <h1>Plants</h1>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants[category].map(p => (
            <div key={p.id}>
              <img src={p.img} width="100" />
              <p>{p.name}</p>
              <p>${p.price}</p>

              <button 
                onClick={() => addToCart(p.id)} 
                disabled={added[p.id]}
              >
                {added[p.id] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
