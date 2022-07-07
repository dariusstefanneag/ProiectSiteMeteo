import "./App.css";

import CurrentWeather from "./components/current-weather/currentWeather";
import { useEffect, useState } from "react";
import MoonCast from "./components/mooncast/MoonCast";
import SearchIcon from "@mui/icons-material/Search";
import Conditions from "./components/Conditions/Conditions";
import Forecast from "./components/forecast/forecast";

function App() {
  const [place, setPlace] = useState("Sibiu");
  const [placeInformation, setPlaceInformation] = useState([]);
  useEffect(()=>{
    handleFetch();
  },
  []);

  const handleFetch = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=9de9ee2e98624978a9a122105222706&q=${place}&days=3&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((response) =>
        setPlaceInformation({
          name: response.location.name,
          country: response.location.country,
          humidity: response.current.humidity,
          wind: response.current.wind_mph,
          pressure: response.current.pressure_in,
          precip: response.current.precip_mm,
          uv: response.current.uv,
          icon: response.current.condition.icon,
          time: response.location.localtime,
          current: response.current.temp_c,
          feelslike:response.current.feelslike_c,
          high: response.forecast.forecastday[0].day.maxtemp_c,
          low: response.forecast.forecastday[0].day.mintemp_c,
          date: response.forecast.forecastday[0].date,
          phase: response.forecast.forecastday[0].astro.moon_phase,
          sunrise: response.forecast.forecastday[0].astro.sunrise,
          sunset: response.forecast.forecastday[0].astro.sunset,
          moonrise: response.forecast.forecastday[0].astro.moonrise,
          moonset: response.forecast.forecastday[0].astro.moonset,
          high1: response.forecast.forecastday[1].day.maxtemp_c,
          low1: response.forecast.forecastday[1].day.mintemp_c,
          date1: response.forecast.forecastday[1].date,
          condition1: response.forecast.forecastday[1].day.condition.text,
          icon1: response.forecast.forecastday[1].day.condition.icon,
          high2: response.forecast.forecastday[2].day.maxtemp_c,
          low2: response.forecast.forecastday[2].day.mintemp_c,
          second: response.forecast.forecastday[2].date,
          condition2: response.forecast.forecastday[2].day.condition.text,
          icon2: response.forecast.forecastday[2].day.condition.icon,

          condition: response.current.condition.text,
        })
      );
    setPlace("");
  };
  console.log(placeInformation);
  return (
    <div>
      <div className="container-search">
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <SearchIcon onClick={handleFetch} fontSize="large" className="search" />
      </div>

      <div className="container">
        <Conditions data={placeInformation} />
        {placeInformation && <CurrentWeather data={placeInformation} />}
        {placeInformation && <MoonCast set={placeInformation} />}
      </div>
      <div>
        <Forecast data={placeInformation} />
      </div>
    </div>
  );
}

export default App;
