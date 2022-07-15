import { combineReducers } from "redux";
import { weatherInfo } from "./WeatherReducer";

const reducers = combineReducers({
  WeatherInfo: weatherInfo,
  
});

export default reducers;
