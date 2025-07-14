import React, { useState } from "react";
import FlipCards from "./Components/FlipCards";
import data from "./data/arabic_letters.json";
import "./index.css";

function App() {
  const letterState = useState(data);
  const currentLetters = letterState[0];
  const updateLetters = letterState[1];

  const shuffleCards = function shuffleTheLetterCards() {
    const originalLettersArray = currentLetters;
    const lettersCopy = [];

    for (let i = 0; i < originalLettersArray.length; i++) {
      lettersCopy.push(originalLettersArray[i]);
    }

    const shuffledLetters = lettersCopy.sort(function randomSort() {
      const randomNumber = Math.random();
      const subtractValue = 0.5;
      return randomNumber - subtractValue;
    });

    updateLetters(shuffledLetters);
  };

  const sortCards = function returnToOriginalOrder() {
    const originalDataCopy = [];

    for (let j = 0; j < data.length; j++) {
      originalDataCopy.push(data[j]);
    }

    updateLetters(originalDataCopy);
  };

  return (
    <div className="min-h-screen p-4 bg-amber-50 bg-opacity-90 bg-opacity-20">
      <h1 className="text-4xl font-bold text-center p-6 text-amber-900 font-amiri">
        Learn the Arabic Alphabet
        <div className="text-amber-700 text-center text-2xl p-3">۞</div>
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={shuffleCards}
          className="px-4 py-2 rounded-lg bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-colors font-amiri"
        >
          Shuffle Cards
        </button>
        <button
          onClick={sortCards}
          className="px-4 py-2 rounded-lg bg-amber-800 text-white shadow-lg hover:bg-amber-900 transition-colors font-amiri"
        >
          Show Alphabetical Order
        </button>
      </div>

      <FlipCards letters={currentLetters} />
    </div>
  );
}

export default App;
