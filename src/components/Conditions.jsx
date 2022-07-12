const Condition = ({ condition }) => {
  return (
    <div className="wrapper">
      <div className="box">
        <p className="main">Humidity:</p>
        <p className="ceva"> {condition.current.humidity} </p>
        <p className="second"> % </p>
      </div>

      <div className="box">
        <p className="main">Wind:</p>
        <p className="ceva"> {Math.round(condition.current.wind_mph)} </p>
        <p className="second"> m/ph </p>
      </div>

      <div className="box">
        <p className="main">Pressure:</p>
        <p className="ceva"> {Math.round(condition.current.pressure_in)} </p>
        <p className="second"> h/pa </p>
      </div>

      <div className="box">
        <p className="main">Precipitations:</p>
        <p className="ceva"> {condition.current.precip_mm} </p>
        <p className="second"> mm </p>
      </div>

      <div className="box">
        <p className="main">UV:</p>
        <p className="ceva"> {condition.current.uv} </p>
        <p className="second"> High </p>
      </div>

      <div className="box">
        <p className="main">Fells Like:</p>
        <p className="ceva"> {Math.round(condition.current.feelslike_c)} </p>

        <p className="second"> °C </p>
      </div>
    </div>
  );
};

export default Condition;
