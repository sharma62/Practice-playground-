import React from 'react';

const Card = ({ location }) => {
  console.log(location)
  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-center">{location.name}, {location.region}</h2>
      <p className="text-gray-500 text-center">{location.country}</p>

      <div className="flex justify-center my-4">
        <img src={location.iconUrl} alt={location.text} className="w-20 h-20" />
      </div>

      <h3 className="text-4xl font-bold text-center">{location.temp_c}°C</h3>
      <p className="text-center text-gray-600">{location.text}</p>

      <div className="flex justify-between mt-4">
        <p className="text-gray-700">Humidity: {location.humidity}%</p>
        <p className="text-gray-700">Wind: {location.wind_kph} kph</p>
      </div>
    </div>
    </>
  );
}

export default Card;
