import React, { useState } from "react";
import FlipCards from "./Components/FlipCards";
import data from "./data/arabic_letters.json";
import "./index.css";

function App() {
  const [letters, setLetters] = useState(data);

  const shuffleCards = () => {
    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    setLetters(shuffled);
  };

  const sortCards = () => {
    const sorted = [...data]; // original alphabetical order
    setLetters(sorted);
  };

  return (
    <div
      className="min-h-screen bg-repeat bg-center p-4"
      style={{
        backgroundColor: "#614c0e",
        backgroundImage: `url("/assets/images/tileable-wood-colored.png")`,
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-4 text-white drop-shadow">
        Learn the Arabic Alphabet
      </h1>
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={shuffleCards}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Shuffle
        </button>
        <button
          onClick={sortCards}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Alphabetical Order
        </button>
      </div>
      <FlipCards letters={letters} />
    </div>
  );
}

export default App;
