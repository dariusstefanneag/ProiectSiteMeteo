
import './App.css';

import CurrentWeather from './components/current-weather/currentWeather';
import{useState} from "react";
import MoonCast from './components/mooncast/MoonCast';

import Sun from './components/SunRiseSunSet/Sun';


function App() {
 
const[place,setPlace]=useState("Sibiu");
const[placeInformation,setPlaceInformation]=useState([])
const handleFetch=()=>{

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=9de9ee2e98624978a9a122105222706&q=${place}&days=1&aqi=no&alerts=no`)
    .then(response=>response.json())
    .then((response) =>setPlaceInformation({
      name:response.location.name,
      country:response.location.country,
      humidity: response.current.humidity,
      wind:response.current.wind_mph,
      pressure:response.current.pressure_in,
      icon:response.current.condition.icon,
      time:response.location.localtime,
      
        current:response.current.temp_c,
        high:response.forecast.forecastday[0].day.maxtemp_c,
        low:response.forecast.forecastday[0].day.mintemp_c,
        date:response.forecast.forecastday[0].date,
        phase:response.forecast.forecastday[0].astro.moon_phase,
        sunrise:response.forecast.forecastday[0].astro.sunrise,
        sunset:response.forecast.forecastday[0].astro.sunset,
       
      condition:response.current.condition.text
    })
    );
    
  };
  console.log(placeInformation)
  return (
    <div>
    <div className="container-search">

       <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)}/>
      <button onClick={handleFetch}>search</button>
      
      </div>

     
   
   <div className='container'>
     <Sun data={placeInformation}/>
   {placeInformation&& <CurrentWeather data={placeInformation}/>}
   {placeInformation&&<MoonCast set={placeInformation}/>}
   
   </div>
   
   
   
   
   
    </div>
  );
}

export default App;
