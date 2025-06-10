/*

import React, { useState } from "react";
import ModalInfo from "./ModalInfo";

function FlipCards({ letters }) {
  const [flippedId, setFlippedId] = useState(null);
  const [modalLetter, setModalLetter] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {letters.map((letter) => {
        const isFlipped = flippedId === letter.id;

        return (
          <div
            key={letter.id}
            className="relative w-32 h-40 cursor-pointer"
            onClick={() => setFlippedId(isFlipped ? null : letter.id)}
          >
        
            <div className="relative w-full h-full transition-all duration-500 preserve-3d">
          
              <div
                className={`absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center text-5xl backface-hidden ${
                  isFlipped ? "rotate-y-180" : "rotate-y-0"
                }`}
              >
                {letter.letter}
              </div>

           
              <div
                className={`absolute w-full h-full bg-yellow-100 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-2 backface-hidden ${
                  isFlipped ? "rotate-y-0" : "rotate-y-180"
                }`}
              >
                <h2 className="text-xl font-style: italic;">{letter.name}</h2>
                <button
                  className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalLetter(letter);
                  }}
                >
                  Example
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {modalLetter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full text-center relative">
            <img
              src={`/assets/images/${modalLetter.example.image}`}
              alt={modalLetter.example.translation}
              className="w-48 h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">
              {modalLetter.example.arabicWord}
            </h3>
            <p className="text-lg italic">
              {modalLetter.example.transliteration}
            </p>
            <p className="text-base">{modalLetter.example.translation}</p>
            <button
              onClick={() => setModalLetter(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FlipCards;

*/

import React, { useState } from "react";
import ModalInfo from "./ModalInfo";

function FlipCards({ letters }) {
  const [flippedId, setFlippedId] = useState(null);
  const [modalLetter, setModalLetter] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {letters.map((letter) => {
        const isFlipped = flippedId === letter.id;

        return (
          <div
            key={letter.id}
            className="relative w-32 h-40 cursor-pointer"
            onClick={() => setFlippedId(isFlipped ? null : letter.id)}
          >
            {/* Card container with perspective */}
            <div className="relative w-full h-full transition-all duration-500 preserve-3d">
              {/* Front */}
              <div
                className={`absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center text-5xl backface-hidden ${
                  isFlipped ? "rotate-y-180" : "rotate-y-0"
                }`}
              >
                {letter.letter}
              </div>

              {/* Back */}
              <div
                className={`absolute w-full h-full bg-yellow-100 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-2 backface-hidden ${
                  isFlipped ? "rotate-y-0" : "rotate-y-180"
                }`}
              >
                <h2 className="text-xl font-style: italic;">{letter.name}</h2>
                <button
                  className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalLetter(letter);
                  }}
                >
                  Example
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal with new format */}
      {modalLetter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full relative">
            <button
              onClick={() => setModalLetter(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={`/assets/images/${modalLetter.example.image}`}
              alt={modalLetter.example.translation}
              className="w-48 h-48 object-contain mx-auto mb-4"
            />

            {/* Content with hyphen prefixes */}
            <div className="text-left space-y-2">
              <p className="text-xl">
                <span className="font-semibold">-Arabic: </span>
                <span className="text-2xl" dir="rtl">
                  {modalLetter.example.arabicWord}
                </span>
              </p>
              <p className="text-lg italic">
                <span className="font-semibold">-Transliteration: </span>
                {modalLetter.example.transliteration}
              </p>
              <p className="text-lg">
                <span className="font-semibold">-English: </span>
                {modalLetter.example.translation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FlipCards;
