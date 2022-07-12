const CurrenWeather = ({ weather }) => {
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
              {Math.round(weather.current.temp_c)}°C
            </p>
          </div>

          <div className="details">
            <div className="paramete-row">
              <div className="flex">
                <div>
                  <p className="parameter-label">
                    H:
                    {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}
                    °C
                  </p>
                  <p className="parameter-label">
                    L:
                    {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}
                    °C
                  </p>
                </div>
                <div className="C-F">
                  <p className="C">C </p>
                  <p className="F">F</p>
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
