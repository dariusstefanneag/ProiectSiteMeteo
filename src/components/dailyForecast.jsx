import moment from "moment";

const ForecastDay = ({ daily }) => {
  return (
    <div>
      <label className="title">3-Days daily</label>

      <div className="position">
        <label className="day">
          {" "}
          {moment(daily.forecast.forecastday[0].date).format("dddd")}
        </label>
        <img
          alt="forecast"
          className="icon-small"
          src={daily.forecast.forecastday[0].day.condition.icon}
        />
        <label className="type">
          {" "}
          {daily.forecast.forecastday[0].day.condition.text}{" "}
        </label>
        <label className="h-l">
          {" "}
          H: {Math.round(daily.forecast.forecastday[0].day.maxtemp_c)}° / L:{" "}
          {Math.round(daily.forecast.forecastday[0].day.mintemp_c)}°{" "}
        </label>
      </div>

      <div className="position">
        <label className="day">
          {" "}
          {moment(daily.forecast.forecastday[1].date).format("dddd")}
        </label>
        <img
          alt="forecast"
          className="icon-small"
          src={daily.forecast.forecastday[1].day.condition.icon}
        />
        <label className="type">
          {" "}
          {daily.forecast.forecastday[1].day.condition.text}{" "}
        </label>
        <label className="h-l">
          {" "}
          H: {Math.round(daily.forecast.forecastday[1].day.maxtemp_c)}° / L:{" "}
          {Math.round(daily.forecast.forecastday[1].day.mintemp_c)}°{" "}
        </label>
      </div>

      <div className="position">
        <label className="day">
          {" "}
          {moment(daily.forecast.forecastday[2].date).format("dddd")}
        </label>
        <img
          alt="forecast"
          className="icon-small"
          src={daily.forecast.forecastday[2].day.condition.icon}
        />
        <label className="type">
          {" "}
          {daily.forecast.forecastday[2].day.condition.text}{" "}
        </label>
        <label className="h-l">
          {" "}
          H: {Math.round(daily.forecast.forecastday[2].day.maxtemp_c)}° / L:{" "}
          {Math.round(daily.forecast.forecastday[2].day.mintemp_c)}°{" "}
        </label>
      </div>
    </div>
  );
};

export default ForecastDay;
