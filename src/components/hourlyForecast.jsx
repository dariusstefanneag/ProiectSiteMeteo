import moment from "moment";

const HourlyForecast = ({ hourly }) => {
  return (
    <div>
      <label className="title1">hourly forecast</label>
      <div className="all">
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[12].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[12].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[12].temp_c)} °
          </p>
        </div>
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[13].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[13].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[13].temp_c)} °
          </p>
        </div>
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[14].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[14].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[14].temp_c)} °
          </p>
        </div>
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[15].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[15].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[15].temp_c)} °
          </p>
        </div>
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[16].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[16].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[16].temp_c)} °
          </p>
        </div>
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[17].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[17].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[17].temp_c)} °
          </p>
        </div>
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[18].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[18].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[18].temp_c)} °
          </p>
        </div>
        <div className="items">
          <p className="hour">
            {moment(hourly.forecast.forecastday[0].hour[19].time).format(
              "h:mm a"
            )}
          </p>
          <img
            alt="hour"
            className="icon-hour"
            src={hourly.forecast.forecastday[0].hour[19].condition.icon}
          />
          <p className="grade-item">
            {Math.round(hourly.forecast.forecastday[0].hour[19].temp_c)} °
          </p>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
