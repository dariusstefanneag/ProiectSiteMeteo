import "./app.css";

const Conditions = ({data}) => {
  return (
    <div className="wrapper">
      
      <div className="box">
        <p  className="main">Humidity:</p>
        <p className="ceva"> {Math.round(data.humidity)} </p>
        <p className="ceva">  %   </p>
      </div>

      <div className="box">
      <p  className="main">Wind:</p>
      <p className="ceva"> {Math.round(data.wind)} </p>
        <p className="ceva">  m/ph  </p>
      </div>

      <div className="box">
      <p  className="main">Pressure:</p>
      <p className="ceva"> {Math.round(data.pressure)} </p>
        <p className="ceva">  h/pa  </p>
      </div>

      <div className="box">
      <p  className="main">Precipitations:</p>
      <p className="ceva"> {Math.round(data.precip)} </p>
        <p className="ceva">  mm   </p>
      </div>

      <div className="box">
      <p  className="main">UV:</p>
      <p className="ceva"> {data.uv} </p>
        <p className="ceva">  High  </p>
      </div>

      <div className="box"> 
      <p  className="main">Fells Like:</p>
        <p className="ceva"> {Math.round(data.feelslike)} </p>
        <p className="ceva">  °C  </p>
        </div>

      </div>
     
    
    
  );
};

export default Conditions;
