import "./MoonCast.css";
import moment from 'moment'

const MoonCast=({set}) =>{
return(
<div className="moon">
      <div className="top">
      <img alt="moon" className="icon-moon " src="icons/moon.png" />
      
    </div>
        <div>
          
        </div>
        <br/>
        <p className="date">date: {moment(set.time).format('MMMM Do YYYY')}</p>
        <br/>
          <p className="phase">phase: {set.phase}</p>
          <br/>
          <br/>
          <p className="phase">Sunrise: {set.sunrise}</p>
          <br/>
          <p className="phase">Sunset: {set.sunset}</p>
          <br/>
          <p className="phase">Moonrise: {set.moonrise}</p>
          <br/>
          <p className="phase">Moonset: {set.moonset}</p>
          
         
        </div>
        


);

}

export default MoonCast;