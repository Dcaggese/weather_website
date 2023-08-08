import hotbg from './assests/hot_day.jpg';
import coldbg from './assests/cold_day.jpg';
import Descriptions from './compenents/Descriptions';
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './weatherService';

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("philadelphia");
  const [units, setUnits] = useState("imperial")
  const [bg, setBg] = useState(hotbg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units)
      setWeather(data);

      //dynamic bg
      const threshold = units === 'metric' ? 20 : 60;
      if (data.temp <= threshold) setBg(coldbg)
      else setBg(hotbg);

    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isFahrenheit = currentUnit === 'F';
    button.innerText = isFahrenheit ? '°C' : '°F';
    setUnits(isFahrenheit ? 'imperial' : 'metric');
  }

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13){
      setCity(e.currentTarget.value)
      e.currentTarget.blur()
    }
  }

  return (
    <div className="app" style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        { weather && (
          <div className="container">
            <div className="section section__inputs">
              <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City..."/>
              <button onClick={(e) => handleUnitsClick(e)}>°C</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weather icon" />
                <h3>{weather.description}</h3>
              </div>

              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${units === 'imperial' ? 'F' : 'C'}`}</h1>
              </div>
            </div>

            {/* bottom description */}
            <Descriptions weather={weather} units={units} />
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
