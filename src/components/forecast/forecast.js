import "./forecast.css";

import moment from 'moment'

const Forecast = ({ data }) => {
  return (
    <div>
              <label className="title">3-Days daily</label>

              <div className="position">

                <label className="day"> {moment(data.date).format('dddd')}</label>
                <img alt="forecast" className="icon-small" src={data.icon} />
                <label className="type"> {data.condition} </label>
                <label className="h-l"> H: {Math.round(data.high)} / L: {Math.round(data.low)} </label>
              </div>

              <div className="position">
                      
                <label className="day"> {moment(data.date1).format('dddd')}</label>
                <img alt="forecast" className="icon-small" src={data.icon1} />
                <label className="type"> {data.condition1} </label>
                <label className="h-l"> H: {Math.round(data.high1)} / L: {Math.round(data.low1)} </label>
              </div>

              <div className="position">
                <label className="day"> {moment(data.second).format('dddd')}</label>
                <img alt="forecast" className="icon-small" src={data.icon2} />
                <label className="type"> {data.condition2} </label>
                <label className="h-l"> H: {Math.round(data.high2)} / L: {Math.round(data.low2)} </label>
              </div>
              </div>

         
  );    
};

export default Forecast;
