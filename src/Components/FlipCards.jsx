import React, { useState } from "react";
import ModalInfo from "./ModalInfo";

function FlipCards({ letters }) {
  const [flippedId, setFlippedId] = useState(null);
  const [modalLetter, setModalLetter] = useState(null);

  return (
    <div className="flex flex-col items-center gap-22">
      {letters.map((letter) => {
        const isFlipped = flippedId === letter.id;

        return (
          <div key={letter.id} className="relative w-64 h-64">
            {/* Card with perspective and flip */}
            <div
              className={`relative w-full h-full transition-all duration-500 preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              onClick={() => setFlippedId(isFlipped ? null : letter.id)}
            >
              {/* Front - Arabic Letter */}
              <div className="absolute w-full h-full bg-amber-50 rounded-xl shadow-lg flex items-center justify-center text-6xl backface-hidden border-2 border-amber-200">
                <span className="text-amber-800">{letter.letter}</span>
              </div>

              {/* Back - Details */}
              <div className="absolute w-full h-full bg-amber-700 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-4 backface-hidden transform rotate-y-180 text-amber-50">
                <h2 className="text-2xl italic font-amiri">{letter.name}</h2>
                <button
                  className="mt-4 px-4 py-2 bg-amber-600 text-amber-50 rounded-lg hover:bg-amber-500 shadow transition-colors"
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

      {/* Modal */}
      {modalLetter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-amber-50 p-6 rounded-xl max-w-sm w-full relative border-2 border-amber-200 shadow-2xl">
            <button
              onClick={() => setModalLetter(null)}
              className="absolute top-2 right-2 text-amber-800 hover:text-amber-600 text-2xl"
            >
              &times;
            </button>

            <img
              src={`/assets/images/${modalLetter.example.image}`}
              alt={modalLetter.example.translation}
              className="w-48 h-48 object-contain mx-auto mb-4"
            />

            <div className="flex flex-col items-center text-center">
              <p className="text-xl">
                <span className="font-semibold text-amber-900">Arabic: </span>
                <span className="text-2xl text-amber-800" dir="rtl">
                  {modalLetter.example.arabicWord}
                </span>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-amber-900">
                  Transliteration:{" "}
                </span>
                <span className="italic text-amber-700">
                  {modalLetter.example.transliteration}
                </span>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-amber-900">English: </span>
                <span className="text-amber-700">
                  {modalLetter.example.translation}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FlipCards;
