import React from 'react';
import BricksDatePicker from './components/BricksDatePicker';

export default function TailwindDemo() {
  return (
    <div
      className="
          bg-white
          dark:bg-gray-800
          p-10
          rounded-xl
          flex flex-col
          gap-8
          max-w-3xl
        "
    >
      <h1 className="text-4xl text-black dark:text-white font-bold text-center">
        Tailwind CSS + PrimeReact
      </h1>
      <BricksDatePicker />
    </div>
  );
}
