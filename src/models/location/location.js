class Location {
    constructor({
      Key,
      Country,
      LocalizedName
    }) {
      this.city = LocalizedName;
      this.country = Country.LocalizedName;
      this.id = Key;
    }

    getID(){
        return this.id;
    }
  };
  
  export default Location;
  
  