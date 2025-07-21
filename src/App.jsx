/*

import React, { useState } from "react";
import FlipCards from "./Components/FlipCards";
import data from "./data/arabic_letters.json";
import "./index.css";

function App() {
  const letterState = useState(data);
  const currentLetters = letterState[0];
  const updateLetters = letterState[1];
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

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
    <div className="min-h-screen p-4 bg-amber-100 bg-opacity-90 bg-opacity-20">
      <h1 className="text-6xl font-bold text-center p-6 text-amber-900 font-amiri">
        Learn the Arabic Alphabet
      </h1>

      <div className="flex justify-center mb-6">
        <div className="relative inline-flex items-center">
          <button
            className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-lg font-bold hover:bg-amber-600 transition-colors"
            onClick={() => {
              setShowInfoModal(true);
              setShowTooltip(false);
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onTouchStart={() => setShowTooltip(true)}
            onTouchEnd={() => setTimeout(() => setShowTooltip(false), 1000)}
            aria-label="Information"
          >
            i
          </button>
          {(showTooltip || window.innerWidth < 640) && (
            <div className="absolute left-full ml-2 bg-white text-amber-800 px-3 py-2 rounded shadow-lg text-sm whitespace-nowrap border border-amber-200">
              Click for more info about this app
            </div>
          )}
        </div>
      </div>

      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-amber-50 p-8 rounded-xl max-w-md w-full relative -2 border-amber-200 shadow-2xl">
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 text-amber-800 hover:text-amber-600 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              About this app
            </h2>
            <div className="text-xl space-y-4 text-amber-900 ">
              <p>
                This application helps you learn the 28 letters of the Arabic
                alphabet through interactive flashcards.
              </p>
              <p>Each card shows:</p>
              <ul className="list-disc pl-5">
                <li>
                  The Arabic letter and its position in the alphabet on the
                  front side, displayed from right to left - the direction in
                  which Arabic is written and read.
                </li>
                <li>
                  The name of the letter on the back side (for more information
                  on the transliteration of Arabic into Latin script, see{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Romanization_of_Arabic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-800 underline"
                  >
                    this Wikipedia article
                  </a>
                  ).
                </li>
                <li>
                  An example of an Arabic word that starts with that letter,
                  including its transliteration, English meaning and an image to
                  enhance memorization.
                </li>
              </ul>
              <p>
                You can use the two buttons to shuffle the cards or return them
                to alphabetical order.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center gap-4 mt-2 mb-8">
        <button
          onClick={shuffleCards}
          className="px-4 py-2 rounded-lg bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-colors font-amiri w-48"
        >
          Shuffle Cards
        </button>
        <button
          onClick={sortCards}
          className="px-4 py-2 rounded-lg bg-amber-500 text-white shadow-lg hover:bg-amber-800 transition-colors font-amiri w-48"
        >
          Show Alphabetical Order
        </button>
      </div>

      <FlipCards letters={currentLetters} />
    </div>
  );
}

export default App;

*/

import React, { useState } from "react";
import FlipCards from "./Components/FlipCards";
import data from "./data/arabic_letters.json";
import "./index.css";

function App() {
  const letterState = useState(data);
  const currentLetters = letterState[0];
  const updateLetters = letterState[1];
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

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
    <div className="min-h-screen flex flex-col p-4 bg-amber-100 bg-opacity-90 bg-opacity-20">
      <div className="flex-grow">
        <h1 className="text-6xl font-bold text-center p-6 text-amber-900 font-amiri">
          Learn the Arabic Alphabet
        </h1>

        <div className="flex justify-center mb-6">
          <div className="relative inline-flex items-center">
            <button
              className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-lg font-bold hover:bg-amber-600 transition-colors"
              onClick={() => {
                setShowInfoModal(true);
                setShowTooltip(false);
              }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onTouchStart={() => setShowTooltip(true)}
              onTouchEnd={() => setTimeout(() => setShowTooltip(false), 1000)}
              aria-label="Information"
            >
              i
            </button>
            {(showTooltip || window.innerWidth < 640) && (
              <div className="absolute left-full ml-2 bg-white text-amber-800 px-3 py-2 rounded shadow-lg text-sm whitespace-nowrap border border-amber-200">
                Click for more info about this app
              </div>
            )}
          </div>
        </div>

        {showInfoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-amber-50 p-8 rounded-xl max-w-md w-full relative border-2 border-amber-200 shadow-2xl">
              <button
                onClick={() => setShowInfoModal(false)}
                className="absolute top-4 right-4 text-amber-800 hover:text-amber-600 text-2xl"
              >
                &times;
              </button>
              <h2 className="text-4xl font-bold text-amber-900 mb-4">
                About this app
              </h2>
              <div className="text-xl space-y-4 text-amber-900 ">
                <p>
                  This application helps you learn the 28 letters of the Arabic
                  alphabet through interactive flashcards.
                </p>
                <p>Each card shows:</p>
                <ul className="list-disc pl-5">
                  <li>
                    The Arabic letter and its position in the alphabet on the
                    front side, displayed from right to left - the direction in
                    which Arabic is written and read.
                  </li>
                  <li>
                    The name of the letter on the back side (for more
                    information on the transliteration of Arabic into Latin
                    script, see{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Romanization_of_Arabic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-800 underline"
                    >
                      this Wikipedia article
                    </a>
                    ).
                  </li>
                  <li>
                    An example of an Arabic word that starts with that letter,
                    including its transliteration, English meaning and an image
                    to enhance memorization.
                  </li>
                </ul>
                <p>
                  You can use the two buttons to shuffle the cards or return
                  them to alphabetical order.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-4 mt-2 mb-8">
          <button
            onClick={shuffleCards}
            className="px-4 py-2 rounded-lg bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-colors font-amiri w-48"
          >
            Shuffle Cards
          </button>
          <button
            onClick={sortCards}
            className="px-4 py-2 rounded-lg bg-amber-500 text-white shadow-lg hover:bg-amber-800 transition-colors font-amiri w-48"
          >
            Show Alphabetical Order
          </button>
        </div>

        <FlipCards letters={currentLetters} />
      </div>

      {/* Footer Section */}
      <footer className="w-screen py-1 bg-amber-800 text-amber-50 text-center mt-8 mx-[-2rem]">
        <div className="flex items-center justify-center gap-1">
          <span>Created by Maxim Roozen</span>
          <span>©</span>
          <span>2025</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
