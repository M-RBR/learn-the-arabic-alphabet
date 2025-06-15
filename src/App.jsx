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
    // Updated App.jsx container
    <div className="min-h-screen p-4 bg-amber-50 bg-opacity-90 bg-[url('/assets/images/arabesque-pattern.png')] bg-repeat bg-opacity-20">
      <h1 className="text-4xl font-bold text-center mb-2 text-amber-900 font-amiri">
        Learn the Arabic Alphabet
        <div className="text-amber-700 text-center text-2xl mt-1">۞</div>
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={shuffleCards}
          className="px-4 py-2 rounded-lg bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-colors font-amiri"
        >
          Shuffle
        </button>
        <button
          onClick={sortCards}
          className="px-4 py-2 rounded-lg bg-amber-800 text-white shadow-lg hover:bg-amber-900 transition-colors font-amiri"
        >
          Alphabetical Order
        </button>
      </div>

      <FlipCards letters={letters} />
    </div>
  );
}

export default App;
