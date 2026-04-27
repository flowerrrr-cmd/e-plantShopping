export default function App() {
  const handleClick = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div>
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={handleClick}>Get Started</button>
    </div>
  );
}
