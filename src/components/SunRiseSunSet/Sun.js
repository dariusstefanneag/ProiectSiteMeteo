import "./app.css";

const Sun = ({data}) => {
  return (
    <div className="sun">
      <div className="top">
        <img alt="sun" className="icon-sun" src="icons/sun.png" />
        <p className="sunrise">Sunrise: {data.sunrise}</p>
        </div>
        <br/>
        
        <div className="top">
        <img alt="sun" className="icon-sun" src="icons/night.png" />
        <p className="sunrise">Sunset: {data.sunset}</p>
        </div>
      </div>
    
  );
};

export default Sun;
