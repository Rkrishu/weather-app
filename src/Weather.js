import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const handelCityChange = (event)=> {
        setCity(event.target.value)
    }
    const fetchWeather = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'c9904798a4bc6d5ed5db695a20d36a79'}`)
               setWeather(response);
        }
        catch(error){
            console.log("Error fetching weather data", error);
        }
    }
    const handelClick = () => {
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter city name'
        value={city} onChange={handelCityChange} />

        <button onClick={handelClick}>Get Weather</button>
        {weather && <>
        <div className='weather-info'>
            <h2>{weather.data.name}</h2>
            <p>Temp is {weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  )
}
