const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;

}

// Add methods to prototype

// count number of restaurants 
ScranAdvisor.prototype.countRestaurants = function() {
    return this.restaurants.length;
};

// find restaurant by full name 
ScranAdvisor.prototype.fullName = function(fullName) {
    return this.restaurants.find(restaurant => restaurant.name === fullName);
};

// find all names of restaurants 
ScranAdvisor.prototype.allNames = function() {
    return this.restaurants.map(restaurant => restaurant.name);
};

// find all restaurants in glasgow 
ScranAdvisor.prototype.findByCity = function (cityName) {
    return this.restaurants.filter(restaurant => restaurant.location.town ===  cityName);
};
module.exports = ScranAdvisor;