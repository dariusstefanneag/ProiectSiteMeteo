import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { WeatherFetch } from "./Info/WeatherFetch";
import Condition from "./components/Conditions";
import CurrenWeather from "./components/CurrentWeather";
import MoonCast from "./components/MoonCast";
import HourlyForecast from "./components/hourlyForecast";
import ForecastDay from "./components/dailyForecast";


function App() {
  const [place, setPlace] = useState("");
  const weatherSelector = useSelector((state) => state);
  const dispatch = useDispatch();
  const getWeatherInfoData = (place) => dispatch(WeatherFetch(place));

  useEffect(() => {
    getWeatherInfoData("sibiu" );
  }, []);

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (place === "") {
      console.log("no place!");
    } else {
      getWeatherInfoData(place);
      console.log(weatherSelector.weatherInfo);
    }
  };

  if (weatherSelector.weatherInfo) {
    return (
      <React.Fragment>
        <div>
          
          <div className="container-search">
            <input
              type="text"
              name="name"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <SearchIcon
              onClick={getWeatherInfo}
              fontSize="large"
              className="search"
            />
          </div>

          <div className="container">
            <Condition condition={weatherSelector.weatherInfo} />
            <CurrenWeather weather={weatherSelector.weatherInfo}  />
            <MoonCast phase={weatherSelector.weatherInfo} />
          </div>
          <div>
            <HourlyForecast hourly={weatherSelector.weatherInfo} />
          </div>
          <div>
            <ForecastDay daily={weatherSelector.weatherInfo} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;