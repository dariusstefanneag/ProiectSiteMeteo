import "./currentWeather.css";



const CurrentWeather = ({data}) => {
  return (
    
    <div className="weather">
      <div className="top">
        <div>
          <p className="location">{data.name},{data.country}</p>
          <p className="description">{data.condition}</p>
        </div>
        

        <img alt="weather" className="iconita" src={data.icon} />
      </div>
      <div className="bottom">
          <p className="temperature">{Math.round(data.current)}°C</p>
          <div className="details">
              <div className="paramete-row">
                  <span className="parameter-label">Details:</span>
              </div>
              <div className="paramete-row">
                  <span className="parameter-label">Higher: </span>
                  <span className="parameter-value"> {Math.round(data.high)}°C </span>
                 
              </div>
              <div className="paramete-row">
              <span className="parameter-label"> Lower: </span>
                  <span className="paramete-value"> {Math.round(data.low)}°c</span>
              </div>
              <div className="paramete-row">
                  <span className="parameter-label">Wind: </span>
                  <span className="parameter-value"> {Math.round(data.wind)} m/s </span>
          </div>
          <div className="paramete-row">
                  <span className="parameter-label">Humidity: </span>
                  <span className="parameter-value"> {Math.round(data.humidity)} % </span>
          </div>
          <div className="paramete-row">
                  <span className="parameter-label">Pressure: </span>
                  <span className="parameter-value"> {Math.round(data.pressure)} hPa </span>
          </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default CurrentWeather;
