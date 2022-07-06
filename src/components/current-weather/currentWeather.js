import "./currentWeather.css";



const CurrentWeather = ({data}) => {
  return (
    
    <div className="weather">
      <div className="top">
        <div>
          <p className="location">{data.name},{data.country}</p>
          <p className="description">{data.condition}</p>
        </div>
        

        
      </div>
      <div className="top">
        <div className="direction">
      <img alt="weather" className="iconita" src={data.icon} />
      <div>
          <p className="temperature">{Math.round(data.current)}°C</p>
          
          </div>
          
          
             <div className="details">
              <div className="paramete-row">
                <div>
                  <p className="parameter-label">H:{Math.round(data.high)}°C</p>
                  <p className="parameter-label">L:{Math.round(data.low)}°C</p>
                 
              </div>
            
          </div>
          
          
         
    </div>
    </div>
    </div>
    </div>
    
    
    
  );
};

export default CurrentWeather;
