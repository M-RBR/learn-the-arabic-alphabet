import React, { useState } from "react";

function FlipCards({ letters }) {
  const [flippedId, setFlippedId] = useState(null);
  const [modalLetter, setModalLetter] = useState(null);

  const handleCardClick = (letterId) => {
    setModalLetter(null);
    setFlippedId(flippedId === letterId ? null : letterId);
  };

  const handleExampleClick = (e, letter) => {
    e.stopPropagation();
    setModalLetter(letter);
  };

  const closeModal = () => setModalLetter(null);

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        dir="rtl"
      >
        {letters.map((letter) => (
          <Card
            key={letter.id}
            letter={letter}
            isFlipped={flippedId === letter.id}
            showModal={modalLetter?.id === letter.id}
            onCardClick={handleCardClick}
            onExampleClick={handleExampleClick}
            onUnflip={() => {
              setModalLetter(null);
              setFlippedId(null);
            }}
            onCloseModal={closeModal}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  letter,
  isFlipped,
  showModal,
  onCardClick,
  onExampleClick,
  onUnflip,
  onCloseModal,
}) {
  const handleUnflip = (e) => {
    e.stopPropagation();
    onUnflip();
  };

  return (
    <div className="relative w-64 h-64 cursor-pointer">
      <div
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => onCardClick(letter.id)}
      >
        {/* Front side of card */}
        <div className="absolute w-full h-full bg-amber-50 rounded-xl shadow-lg flex items-center justify-center text-6xl backface-hidden border-3 border-amber-200">
          <span className="text-amber-800">{letter.letter}</span>
          <span className="text-amber-800 text-xl absolute right-5 bottom-3 size-8">
            {letter.id}
          </span>
        </div>

        {/* Back side of card */}
        <div className="border-3 border-amber-200 absolute w-full h-full bg-amber-700 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-4 backface-hidden transform rotate-y-180 text-amber-50">
          <button
            onClick={handleUnflip}
            className="absolute top-2 right-4 text-amber-50 hover:text-amber-200 text-2xl"
          >
            &times;
          </button>
          <h2 className="text-4xl italic font-amiri">{letter.name}</h2>
          <button
            className="text-lg mt-6 px-4 py-2 bg-amber-400 text-amber-50 rounded-lg hover:bg-amber-500 shadow transition-colors"
            onClick={(e) => onExampleClick(e, letter)}
          >
            Example
          </button>

          {/* Modal */}
          {showModal && (
            <div className="absolute inset-0 z-10">
              <div className="absolute w-full h-full bg-amber-700 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCloseModal();
                  }}
                  className="absolute top-2 right-4 text-amber-50 hover:text-amber-200 text-2xl"
                >
                  &times;
                </button>

                <img
                  src={`/assets/images/${letter.example.image}`}
                  alt={letter.example.translation}
                  className="w-32 h-32 object-contain mx-auto mb-2 rounded-lg"
                />

                <div className="flex flex-col items-center text-center">
                  <p className="text-xl w-full" dir="ltr">
                    <span className="font-semibold">Arabic:</span>
                    <span className="text-xl ml-2" dir="rtl">
                      {" "}
                      {/* ml-2 gives a small 0.5rem gap */}
                      {letter.example.arabicWord}
                    </span>
                  </p>
                  <p className="text-xl">
                    <span className="font-semibold">Transliteration: </span>
                    <span className="italic">
                      {letter.example.transliteration}
                    </span>
                  </p>
                  <p className="text-xl">
                    <span className="font-semibold">English: </span>
                    <span>{letter.example.translation}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlipCards;
