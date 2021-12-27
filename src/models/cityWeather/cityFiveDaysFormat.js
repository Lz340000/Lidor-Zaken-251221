import { getDayName } from 'utils/time';
import { temperatureFormator } from 'utils/temperature';

class CityFiveDateFormat {
    constructor({
      Temperature,
      Day,
      Date
    }) {
      this.description = Day.IconPhrase;
      this.celsiusMax = Math.round(temperatureFormator(Temperature.Maximum.Value, 'fahrenheit'));
      this.fahrenheitMax = Temperature.Maximum.Value;
      this.celsiusMin = Math.round(temperatureFormator(Temperature.Minimum.Value, 'fahrenheit'));
      this.fahrenheitMin = Temperature.Minimum.Value;
      this.day = getDayName(Date);
    }
  };
  
  export default CityFiveDateFormat;
