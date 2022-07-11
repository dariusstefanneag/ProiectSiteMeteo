export function WeatherFetch(place) {
  return function (dispatch) {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=9de9ee2e98624978a9a122105222706&q=${place}&days=3&aqi=no&alerts=no`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch({ type: "FETCH_WEATHER", payload: response });
      }).catch(err=>{
          console.log(err);
      })
  };
}
