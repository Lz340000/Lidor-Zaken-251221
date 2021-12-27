import { toDisplayTime } from 'utils/time';

class CityWeather {
    constructor({
      IsDayTime,
      Temperature,
      WeatherText,
      LocalObservationDateTime
    }) {
      this.isDay = IsDayTime;
      this.description = WeatherText;
      this.celsius = Temperature.Metric;
      this.fahrenheit = Temperature.Imperial;
      this.time = toDisplayTime(LocalObservationDateTime);
    }
  };
  
  export default CityWeather;
