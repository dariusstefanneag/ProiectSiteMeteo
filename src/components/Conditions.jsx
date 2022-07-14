import { Switch} from "@mui/material";
import { useState } from "react";

const Condition = ({ condition }) => {

  const [data, setData]=useState(false);
  const handleData=()=>{
    data ? setData(false): setData(true);

  }
  const [wind, setWind]=useState(false);
  const handleWind=()=>{
    wind ? setWind(false): setWind(true);

  }
  const [pressure, setPressure]=useState(false);
  const handlePressure=()=>{
    pressure ? setPressure(false): setPressure(true);

  }
  const [precip, setPrecip]=useState(false);
  const handlePrecip=()=>{
    precip ? setPrecip(false): setPrecip(true);

  }
  return (
    <div className="wrapper">
      <div className="box">
        <p className="main">Humidity:</p>
        <p className="ceva"> {condition.current.humidity} </p>
        <p className="second"> % </p>
      </div>

      <div className="box">
        <p className="main">Wind:</p>
        <p className="ceva"> {Math.round(wind ?(condition.current.wind_mph):(condition.current.wind_kph))}</p>
        <Switch onClick={handleWind}/>
      </div>

      <div className="box">
        <p className="main">Pressure:</p>
        <p className="ceva"> {Math.round(pressure ?(condition.current.pressure_in):(condition.current.pressure_mb))} </p>
        <Switch onClick={handlePressure}/>
      </div>

      <div className="box">
        <p className="main">Precipitations:</p>
        <p className="ceva"> {precip ?(condition.current.precip_mm):(condition.current.precip_in)} </p>
        <Switch onClick={handlePrecip}/>
      </div>

      <div className="box">
        <p className="main">UV:</p>
        <p className="ceva"> {condition.current.uv} </p>
        <p className="second"> High </p>
      </div>

      <div className="box">
        <p className="main">Fells Like:</p>
        <p className="ceva"> {Math.round(data ?(condition.current.feelslike_c):(condition.current.feelslike_f))}° </p>

        <Switch onClick={handleData}/>
      </div>
    </div>
  );
};

export default Condition;
