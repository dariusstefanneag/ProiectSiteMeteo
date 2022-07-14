import { Switch } from "@mui/material";
import { useState } from "react";

const CurrenWeather = ({ weather }) => {
  const [temp, setTemp]=useState(false);
  const handleTempData=()=>{
    temp ? setTemp(false): setTemp(true);

  }

  
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="location">
            {weather.location.name},{weather.location.country}
          </p>
          <p className="description">{weather.current.condition.text}</p>
        </div>
      </div>

      <div className="top">
        <div className="direction">
          <img
            alt="weather"
            className="iconita"
            src={weather.current.condition.icon}
          />
          <div>
            <p className="temperature">
              {Math.round(temp ? (weather.current.temp_c):(weather.current.temp_f))}°
            </p>
          </div>

          <div className="details">
            <div className="paramete-row">
              <div className="flex">
                <div>
                  <p className="parameter-label">
                    H:
                     {Math.round(temp ? (weather.forecast.forecastday[0].day.maxtemp_c):(weather.forecast.forecastday[0].day.maxtemp_f))}°
                    
                  </p>
                  <p className="parameter-label">
                    L:
                     {Math.round(temp ? (weather.forecast.forecastday[0].day.mintemp_c):(weather.forecast.forecastday[0].day.mintemp_f))}°
                    
                  </p>
                </div>
                <div className="C-F">
                 <Switch onClick={handleTempData}/>
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrenWeather;
