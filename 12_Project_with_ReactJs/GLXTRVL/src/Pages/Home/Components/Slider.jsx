import React, { useEffect, useState } from "react";

const images = [
  "https://wallpaperaccess.com/full/1348035.jpg",
  "https://wallpaperaccess.com/full/639723.jpg",
  "https://wallpaperaccess.com/full/2432640.jpg",
  "https://wallpaperaccess.com/full/639723.jpg",
];
const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-10 rounded overflow-hidden shadow-lg">
      {/* Images */}
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          className={`w-full h-[400px] transition-opacity duration-700 ease-in-out ${
            current === idx ? "block" : "hidden"
          }`}
        />
      ))}

      {/* Buttons */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={goNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
