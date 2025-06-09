// FlipCards.jsx
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
            className="relative w-32 h-40 perspective cursor-pointer"
            onClick={() => setFlippedId(isFlipped ? null : letter.id)}
          >
            <div
              className={`transition-transform duration-500 w-full h-full transform ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center text-5xl backface-hidden">
                {letter.letter}
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-yellow-100 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-2 rotate-y-180 backface-hidden">
                <h2 className="text-xl font-semibold">{letter.name}</h2>
                <button
                  className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent flipping
                    setModalLetter(letter);
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal */}
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
