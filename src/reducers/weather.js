import LocationList from 'models/location/locationList';
export default function weather(
    state = {
      location: {},
      cityWeather: {},
      fiveDaysList: [],
      favoriteList: new LocationList([])
    },
    action
  ) {
    switch (action.type) {
      case 'SET_LOCATION':
        return {
          ...state,
          location: action.value
        };
    case 'SET_CITY_WEATHER': 
      return {
          ...state,
          cityWeather: action.value
        };
      case 'SET_5DAYS_CITY_WEATHER': 
        return {
            ...state,
            fiveDaysList: action.value
          };
      case 'ADD_FAVORITE': 
      console.log('add')
        let tempAdd = state.favoriteList;
        tempAdd.addFavorite(action.value);
        return {
            ...state,
            favoriteList: tempAdd
          };
      default:
        return state;
    }
  }
  