import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = ({ location }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
                );
                setWeather(response.data);
            } catch (err) {
                console.error('Error fetching weather data:', err);
                setError('Could not fetch weather data');
            }
        };

        fetchWeather();
    }, [location]);

    if (error) return <div className="weather-container">{error}</div>;
    if (!weather) return <div className="weather-container loading">Loading...</div>;

    return (
        <div className="weather-container">
            <h2>Weather in {weather.name}</h2>
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
            <p>{weather.weather[0].description}</p>
        </div>
    );
};

export default Weather;
