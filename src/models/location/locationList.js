import Location from './location';

class LocationsList {
  constructor(locations) {
    this.list = locations.map(el => new Location(el));
  }

  getList() {
    return this.list;
  }

  getListLen() {
    return this.list.length;
  }

  addFavorite(element) {
    this.list.push(element) 
  }
}

export default LocationsList;
