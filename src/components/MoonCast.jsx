import moment from "moment";

const MoonCast = ({ phase }) => {
  return (
    <div className="moon">
      <div className="top">
        <img alt="moon" className="icon-moon " src="icons/moon.png" />
      </div>
      <div></div>
      <br />
      <p className="date">
        date: {moment(phase.location.localtime).format("MMMM Do YYYY")}
      </p>
      <br />
      <p className="phase">
        phase: {phase.forecast.forecastday[0].astro.moon_phase}
      </p>
      <br />
      <br />
      <p className="phase">
        Sunrise: {phase.forecast.forecastday[0].astro.sunrise}
      </p>
      <br />
      <p className="phase">
        Sunset: {phase.forecast.forecastday[0].astro.sunset}
      </p>
      <br />
      <p className="phase">
        Moonrise: {phase.forecast.forecastday[0].astro.moonrise}
      </p>
      <br />
      <p className="phase">
        Moonset: {phase.forecast.forecastday[0].astro.moonset}
      </p>
    </div>
  );
};

export default MoonCast;
