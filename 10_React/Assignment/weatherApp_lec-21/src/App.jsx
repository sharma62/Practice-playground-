import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Card from './components/Card';

const App = () => {
  const [weatherObj, setWeatherObj] = useState({});

  const locationObj = weatherObj['location'];
  const currentObj = weatherObj['current'];
  const forecastObj = weatherObj['forecast'];

  console.log(!(locationObj && currentObj))

  const weather = locationObj && currentObj ? {
    name: locationObj['name'],
    region: locationObj['region'],
    country: locationObj['country'],
    lat: locationObj['lat'],
    lon: locationObj['lon'],
    iconUrl: currentObj['condition'].icon,
    text: currentObj['condition'].text,
    temp_c: currentObj['temp_c'],
    wind_kph: currentObj['wind_kph'],
    uv: currentObj['uv'],
    humidity: currentObj['humidity']
  } : null;

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-6 text-center p-10">🌦 Weather App</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='flex justify-center'>
          <SearchBar setWeatherObj={setWeatherObj} />
        </div>
        <div>
          {(!locationObj || !currentObj || !forecastObj) ? (
            <p className="text-red-600 text-center capitalize"> * please input City </p>
          ) : (
            <Card location={weather} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;