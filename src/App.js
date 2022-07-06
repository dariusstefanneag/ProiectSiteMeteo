
import './App.css';

import CurrentWeather from './components/current-weather/currentWeather';
import{  useEffect, useState} from "react";
import MoonCast from './components/mooncast/MoonCast';
import SearchIcon from '@mui/icons-material/Search';
import Conditions from './components/Conditions/Conditions';


function App() {
 
const[place,setPlace]=useState("Sibiu");
const[placeInformation,setPlaceInformation]=useState([]);

useEffect(() =>{
  handleFetch();
},[]);



const handleFetch=()=>{

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=9de9ee2e98624978a9a122105222706&q=${place}&days=1&aqi=no&alerts=no`)
    .then(response=>response.json())
    .then((response) =>setPlaceInformation({
      name:response.location.name,
      country:response.location.country,
      humidity: response.current.humidity,
      wind:response.current.wind_mph,
      pressure:response.current.pressure_in,
      precip:response.current.precip_mm,
      uv:response.current.uv,
      icon:response.current.condition.icon,
      time:response.location.localtime,
        current:response.current.temp_c,
        high:response.forecast.forecastday[0].day.maxtemp_c,
        low:response.forecast.forecastday[0].day.mintemp_c,
        date:response.forecast.forecastday[0].date,
        phase:response.forecast.forecastday[0].astro.moon_phase,
        sunrise:response.forecast.forecastday[0].astro.sunrise,
        sunset:response.forecast.forecastday[0].astro.sunset,
        moonrise:response.forecast.forecastday[0].astro.moonrise,
        moonset:response.forecast.forecastday[0].astro.moonset,
       
      condition:response.current.condition.text
    })
    );
    setPlace("");
  };
  console.log(placeInformation)
  return (
    
    <div>
    <div className="container-search">

       <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)}/>
       <SearchIcon onClick={handleFetch} fontSize ="large"className="search"/>
      
      
      </div>

     
   
   <div className='container'>
     <Conditions data={placeInformation}/>
   {placeInformation&& <CurrentWeather data={placeInformation}/>}
   {placeInformation&&<MoonCast set={placeInformation}/>}
   
   </div>
    </div>
  );
}

export default App;
