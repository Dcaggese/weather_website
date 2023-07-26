import hotbg from './assests/hot_day.jpg';
import coldbg from './assests/cold_day.jpg';
import Descriptions from './compenents/Descriptions';
import { useEffect } from 'react';
import { getFormattedWeatherData } from './weatherService';

function App() {

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('paris')
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="app" style={{backgroundImage: `url(${coldbg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter City..."/>
            <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather icon" />
              <h3>Cloudy</h3>
            </div>

            <div className="temperature">
              <h1>30 °F</h1>
            </div>
          </div>

            {/* bottom description */}
            <Descriptions />
        </div>
      </div>
    </div>
  );
}

export default App;
