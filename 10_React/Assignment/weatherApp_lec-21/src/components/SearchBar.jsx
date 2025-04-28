import React, { useState } from 'react';

const SearchBar = ({ setWeatherObj }) => {
    const [input, setInput] = useState('patna');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    let place = input;

    const handleFetchWeather = () => {
        let API_KEY = '9dbba822ed444399998101722252402';
        let URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${place}`;

        fetch(URL)
            .then((res) => res.json())
            .then((resData) => {
                // console.log(resData);
                setWeatherObj(resData)
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            }); 
    };

    return (
        <>
            <input
                type="text"
                placeholder="City"
                value={input}
                onChange={handleInputChange}
                className='px-4 py-2 rounded-lg border-none outline-blue-600 shadow-md text-gray-500 cursor-auto mx-3 h-10'
                autoComplete='off'
            />
            <button onClick={handleFetchWeather} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition-all cursor-pointer h-10">Check</button>
        </>
    );
};

export default SearchBar;