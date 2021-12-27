import CityFiveDateFormat from './cityFiveDaysFormat';

class CityFiveDaysFormatList {
  constructor(fiveDays) {
    this.list = fiveDays.map(el => new CityFiveDateFormat(el));
  }

  getList() {
    return this.list;
  }

  getListLen() {
    return this.list.length;
  }
}

export default CityFiveDaysFormatList;

