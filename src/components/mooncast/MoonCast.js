import "./MoonCast.css";

const MoonCast=({set}) =>{
return(
<div className="moon">
      <div className="top">
      <img alt="moon" className="icon-moon " src="icons/moon.png" />
      
    </div>
        <div>
          
        </div>
        <br></br>
        <p className="date">date: {set.date}</p>
        <br></br>
          <p className="phase">phase: {set.phase}</p>
         
        </div>
        


);

}

export default MoonCast;