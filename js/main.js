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

  }
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


//decorators, making trucks hae colors and models

var truck = new vechile("truck");
truck.setModel = function(modelName) {
    truck.model = modelName;
};
truck.setColor = function(color) {
  truck.color = color;
};



function MacBook() {
  this.cost = function () {return 997;};
  this.screenSize = function () {return 11.6;};

}

function memory(macbook) {
  var v = macbook.cost();
  macbook.cost = function () {
    return v + 75;
  };
}

function engraving(macbook) {
  var v = macbook.cost();
  macbook.cost = function () {
    return v + 200;
  };
}

function insure(macbook) {
  var v = macbook.cost();
  macbook.cost = function () {
    return v + 250;
  };
}
