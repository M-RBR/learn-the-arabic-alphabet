import React from "react";

function ModalInfo({ letter, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl max-w-sm w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={`/assets/images/${letter.example.image}`}
          alt={letter.example.translation}
          className="w-48 h-48 object-contain mx-auto mb-4"
        />

        {/* Content with hyphen prefixes */}
        <div className="text-left space-y-2">
          <p className="text-xl">
            <span className="font-semibold">-Arabic: </span>
            <span className="text-2xl" dir="rtl">
              {letter.example.arabicWord}
            </span>
          </p>
          <p className="text-lg italic">
            <span className="font-semibold">-Transliteration: </span>
            {letter.example.transliteration}
          </p>
          <p className="text-lg">
            <span className="font-semibold">-English: </span>
            {letter.example.translation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalInfo;

/*

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
        <h3 className="text-2xl font-bold">
          Arabic: {letter.example.arabicWord}
        </h3>
        <p className="text-lg italic">
          Transliteration: {letter.example.transliteration}
        </p>
        <p className="text-base">English: {letter.example.translation}</p>
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

*/
