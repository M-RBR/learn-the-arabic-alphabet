import React from "react";

function ModalInfo({ letter, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl max-w-sm w-full text-center relative">
        <img
          src={`/assets/images/${letter.example.image}`}
          alt={letter.example.translation}
          className="w-48 h-48 object-contain mx-auto mb-4"
        />
        <h3 className="text-2xl font-bold">{letter.example.arabicWord}</h3>
        <p className="text-lg italic">{letter.example.transliteration}</p>
        <p className="text-base">{letter.example.translation}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ModalInfo;
