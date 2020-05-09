const data = {
    //getter function
    locations: [],
    get location(){
        return this._location
    },
    //setter function
    set location(value){
        this._location = value.trim()
        this.locations.push(this._location)
    }

}

data.location = ' kolkata'
data.location = 'New York'
console.log(data)