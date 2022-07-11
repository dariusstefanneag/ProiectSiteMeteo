import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WeatherFetch } from "./Info/WeatherFetch";
import moment from "moment";

function App() {
  const [place, setPlace] = useState("");
  const weatherSelector = useSelector((state) => state);
  const dispatch = useDispatch();
  const getWeatherInfoData = (place) => dispatch(WeatherFetch(place));

  useEffect(() => {
    getWeatherInfoData("sibiu");
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
            <div className="wrapper">
              <div className="box">
                <p className="main">Humidity:</p>
                <p className="ceva">
                  {" "}
                  {weatherSelector.weatherInfo.current.humidity}{" "}
                </p>
                <p className="ceva"> % </p>
              </div>

              <div className="box">
                <p className="main">Wind:</p>
                <p className="ceva">
                  {" "}
                  {Math.round(
                    weatherSelector.weatherInfo.current.wind_mph
                  )}{" "}
                </p>
                <p className="ceva"> m/ph </p>
              </div>

              <div className="box">
                <p className="main">Pressure:</p>
                <p className="ceva">
                  {" "}
                  {Math.round(
                    weatherSelector.weatherInfo.current.pressure_in
                  )}{" "}
                </p>
                <p className="ceva"> h/pa </p>
              </div>

              <div className="box">
                <p className="main">Precipitations:</p>
                <p className="ceva">
                  {" "}
                  {weatherSelector.weatherInfo.current.precip_mm}{" "}
                </p>
                <p className="ceva"> mm </p>
              </div>

              <div className="box">
                <p className="main">UV:</p>
                <p className="ceva">
                  {" "}
                  {weatherSelector.weatherInfo.current.uv}{" "}
                </p>
                <p className="ceva"> High </p>
              </div>

              <div className="box">
                <p className="main">Fells Like:</p>
                <p className="ceva">
                  {" "}
                  {Math.round(
                    weatherSelector.weatherInfo.current.feelslike_c
                  )}{" "}
                </p>
                <p className="ceva"> °C </p>
              </div>
            </div>
            <div className="weather">
              <div className="top">
                <div>
                  <p className="location">
                    {weatherSelector.weatherInfo.location.name},
                    {weatherSelector.weatherInfo.location.country}
                  </p>
                  <p className="description">
                    {weatherSelector.weatherInfo.current.condition.text}
                  </p>
                </div>
              </div>

              <div className="top">
                <div className="direction">
                  <img
                    alt="weather"
                    className="iconita"
                    src={weatherSelector.weatherInfo.current.condition.icon}
                  />
                  <div>
                    <p className="temperature">
                      {Math.round(weatherSelector.weatherInfo.current.temp_c)}°C
                    </p>
                  </div>

                  <div className="details">
                    <div className="paramete-row">
                      <div>
                        <p className="parameter-label">
                          H:
                          {Math.round(
                            weatherSelector.weatherInfo.forecast.forecastday[0]
                              .day.maxtemp_c
                          )}
                          °C
                        </p>
                        <p className="parameter-label">
                          L:
                          {Math.round(
                            weatherSelector.weatherInfo.forecast.forecastday[0]
                              .day.mintemp_c
                          )}
                          °C
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="moon">
              <div className="top">
                <img alt="moon" className="icon-moon " src="icons/moon.png" />
              </div>
              <div></div>
              <br />
              <p className="date">
                date:{" "}
                {moment(weatherSelector.weatherInfo.location.localtime).format(
                  "MMMM Do YYYY"
                )}
              </p>
              <br />
              <p className="phase">
                phase:{" "}
                {
                  weatherSelector.weatherInfo.forecast.forecastday[0].astro
                    .moon_phase
                }
              </p>
              <br />
              <br />
              <p className="phase">
                Sunrise:{" "}
                {
                  weatherSelector.weatherInfo.forecast.forecastday[0].astro
                    .sunrise
                }
              </p>
              <br />
              <p className="phase">
                Sunset:{" "}
                {
                  weatherSelector.weatherInfo.forecast.forecastday[0].astro
                    .sunset
                }
              </p>
              <br />
              <p className="phase">
                Moonrise:{" "}
                {
                  weatherSelector.weatherInfo.forecast.forecastday[0].astro
                    .moonrise
                }
              </p>
              <br />
              <p className="phase">
                Moonset:{" "}
                {
                  weatherSelector.weatherInfo.forecast.forecastday[0].astro
                    .moonset
                }
              </p>
            </div>
          </div>
          <div>
            <div>
              <label className="title1">hourly forecast</label>
              <div className="all">
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[12].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[12].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[12].temp_c
                    )} °
                  </p>
                </div>
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[13].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[13].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[13].temp_c
                    )} °
                  </p>
                </div>
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[14].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[14].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[14].temp_c
                    )} °
                  </p>
                </div>
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[15].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[15].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[15].temp_c
                    )} °
                  </p>
                </div>
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[16].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[16].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[16].temp_c
                    )} °
                  </p>
                </div>
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[17].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[17].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[17].temp_c
                    )} °
                  </p>
                </div>
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[18].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[18].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[18].temp_c
                    )} °
                  </p>
                </div>
                <div className="items">
                  <p className="hour">
                    {moment(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[19].time
                    ).format("h:mm a")}
                  </p>
                  <img
                    alt="hour"
                    className="icon-hour"
                    src={
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[19].condition.icon
                    }
                  />
                  <p className="grade-item">
                    {Math.round(
                      weatherSelector.weatherInfo.forecast.forecastday[0]
                        .hour[19].temp_c
                    )} °
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className="title">3-Days daily</label>

              <div className="position">
                <label className="day">
                  {" "}
                  {moment(
                    weatherSelector.weatherInfo.forecast.forecastday[0].date
                  ).format("dddd")}
                </label>
                <img
                  alt="forecast"
                  className="icon-small"
                  src={
                    weatherSelector.weatherInfo.forecast.forecastday[0].day
                      .condition.icon
                  }
                />
                <label className="type">
                  {" "}
                  {
                    weatherSelector.weatherInfo.forecast.forecastday[0].day
                      .condition.text
                  }{" "}
                </label>
                <label className="h-l">
                  {" "}
                  H:{" "}
                  {Math.round(
                    weatherSelector.weatherInfo.forecast.forecastday[0].day
                      .maxtemp_c
                  )}°{" "}
                  / L:{" "}
                  {Math.round(
                    weatherSelector.weatherInfo.forecast.forecastday[0].day
                      .mintemp_c
                  )}°{" "}
                </label>
              </div>

              <div className="position">
                <label className="day">
                  {" "}
                  {moment(
                    weatherSelector.weatherInfo.forecast.forecastday[1].date
                  ).format("dddd")}
                </label>
                <img
                  alt="forecast"
                  className="icon-small"
                  src={
                    weatherSelector.weatherInfo.forecast.forecastday[1].day
                      .condition.icon
                  }
                />
                <label className="type">
                  {" "}
                  {
                    weatherSelector.weatherInfo.forecast.forecastday[1].day
                      .condition.text
                  }{" "}
                </label>
                <label className="h-l">
                  {" "}
                  H:{" "}
                  {Math.round(
                    weatherSelector.weatherInfo.forecast.forecastday[1].day
                      .maxtemp_c
                  )}°{" "}
                  / L:{" "}
                  {Math.round(
                    weatherSelector.weatherInfo.forecast.forecastday[1].day
                      .mintemp_c
                  )}°{" "}
                </label>
              </div>

              <div className="position">
                <label className="day">
                  {" "}
                  {moment(
                    weatherSelector.weatherInfo.forecast.forecastday[2].date
                  ).format("dddd")}
                </label>
                <img
                  alt="forecast"
                  className="icon-small"
                  src={
                    weatherSelector.weatherInfo.forecast.forecastday[2].day
                      .condition.icon
                  }
                />
                <label className="type">
                  {" "}
                  {
                    weatherSelector.weatherInfo.forecast.forecastday[2].day
                      .condition.text
                  }{" "}
                </label>
                <label className="h-l">
                  {" "}
                  H:{" "}
                  {Math.round(
                    weatherSelector.weatherInfo.forecast.forecastday[2].day
                      .maxtemp_c
                  )}°{" "}
                  / L:{" "}
                  {Math.round(
                    weatherSelector.weatherInfo.forecast.forecastday[2].day
                      .mintemp_c
                  )}°{" "}
                </label>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
