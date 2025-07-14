import React, { useState } from "react";

function FlipCards({ letters }) {
  const [flippedId, setFlippedId] = useState(null);
  const [modalLetter, setModalLetter] = useState(null);

  const handleCardClick = (letterId) => {
    setFlippedId(flippedId === letterId ? null : letterId);
  };

  const handleExampleClick = (e, letter) => {
    e.stopPropagation();
    setModalLetter(letter);
  };

  const closeModal = () => setModalLetter(null);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {letters.map((letter) => (
          <Card
            key={letter.id}
            letter={letter}
            isFlipped={flippedId === letter.id}
            onCardClick={handleCardClick}
            onExampleClick={handleExampleClick}
          />
        ))}
      </div>

      {/* Modal */}
      {modalLetter && <LetterModal letter={modalLetter} onClose={closeModal} />}
    </div>
  );
}

// Extracted Card Component
function Card({ letter, isFlipped, onCardClick, onExampleClick }) {
  return (
    <div className="relative w-64 h-64 cursor-pointer">
      <div
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => onCardClick(letter.id)}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-amber-50 rounded-xl shadow-lg flex items-center justify-center text-6xl backface-hidden border-2 border-amber-200">
          <span className="text-amber-800">{letter.letter}</span>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-amber-700 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-4 backface-hidden transform rotate-y-180 text-amber-50">
          <h2 className="text-2xl italic font-amiri">{letter.name}</h2>
          <button
            className="mt-4 px-4 py-2 bg-amber-600 text-amber-50 rounded-lg hover:bg-amber-500 shadow transition-colors"
            onClick={(e) => onExampleClick(e, letter)}
          >
            Example
          </button>
        </div>
      </div>
    </div>
  );
}

// Extracted Modal Component
function LetterModal({ letter, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-amber-50 p-6 rounded-xl max-w-sm w-full relative border-2 border-amber-200 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-amber-800 hover:text-amber-600 text-2xl"
        >
          &times;
        </button>

        <img
          src={`/assets/images/${letter.example.image}`}
          alt={letter.example.translation}
          className="w-48 h-48 object-contain mx-auto mb-4 rounded-lg"
        />

        <div className="flex flex-col items-center text-center">
          <p className="text-xl">
            <span className="font-semibold text-amber-900">Arabic: </span>
            <span className="text-2xl text-amber-800" dir="rtl">
              {letter.example.arabicWord}
            </span>
          </p>
          <p className="text-lg">
            <span className="font-semibold text-amber-900">
              Transliteration:{" "}
            </span>
            <span className="italic text-amber-700">
              {letter.example.transliteration}
            </span>
          </p>
          <p className="text-lg">
            <span className="font-semibold text-amber-900">English: </span>
            <span className="text-amber-700">{letter.example.translation}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlipCards;
