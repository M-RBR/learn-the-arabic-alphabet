import React from "react";

function ModalInfo({ letter, onClose }) {
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

export default ModalInfo;
