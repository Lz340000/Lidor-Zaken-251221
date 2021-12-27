import api from 'api';
import CityWeather from 'models/cityWeather/cityWeather';
import LocationList from 'models/location/locationList';
import CityFiveDaysFormatList from 'models/cityWeather/cityFiveDaysFormatList';

export const getSearchLocations = data => {
    return async () => {
      const res = await api(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_APIKEY}&q=${data}`);
      return new LocationList(res).getList();
    };
  };

export const getCurrentCityWeather = data => {
  return async dispatch => {
    const res = await api(`http://dataservice.accuweather.com/currentconditions/v1/${data.getID()}?apikey=${process.env.REACT_APP_APIKEY}`);
    dispatch({type: 'SET_CITY_WEATHER', value: new CityWeather(...res)});
    dispatch({type: 'SET_LOCATION', value: data});
  };
};

export const getFiveDaysCityWeather = data => {
  return async dispatch => {
    const res = await api(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data.getID()}?apikey=${process.env.REACT_APP_APIKEY}`);
    dispatch({type: 'SET_5DAYS_CITY_WEATHER', value: new CityFiveDaysFormatList(res?.DailyForecasts)});
  };
};
