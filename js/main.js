var prettyDate = {
  format: function(now, time){
    var date = new Date(time || ""),
      diff = (((new Date(now)).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);

    if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
      return;

  return day_diff === 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor( diff / 60 ) +
          " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor( diff / 3600 ) +
          " hours ago") ||
      day_diff === 1 && "Yesterday" ||
      day_diff < 7 && day_diff + " days ago" ||
      day_diff < 31 && Math.ceil( day_diff / 7 ) +
        " weeks ago";
  },

  update: function(now) {
    var links = document.getElementsByTagName("a");
    for ( var i = 0; i < links.length; i++ ) {
      if ( links[i].title ) {
        var date = prettyDate.format(now, links[i].title);
        if ( date ) {
          links[i].innerHTML = date;
        }
      }
    }
  }
};

function add(x,y) {
  return x + y;
}

//Design pattern things below

//constructor
function Car(model,year,miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() {
    return "This " + this.year + " " + this.model + " has traveled " + this.miles;
  };
}



//singleton

var mySingleton = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {

    // Singleton

    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";

    var privateRandomNumber = Math.random();

    return {

      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },

      publicProperty: "I am also public",

      getRandomNumber: function() {
        return privateRandomNumber;
      }

    };

  };

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();

//Decorator

function vechile(vechileType) {

  this.vechileType = vechileType || "car";
  this.model = "default";
  this.license = "00000-000";

}

var testInst = new vechile("car");

console.log(testInst);

var truck = new vechile("truck");

//decorators, making trucks hae colors and models
truck.setModel = function(modelName) {
  truck.model = modelName;
};

truck.setColor = function(color) {
  truck.color = color;
};

truck.setColor("blue");
truck.setModel("F-150");

console.log(truck);









