//constructor, Creational
function Phone() {
  this.model = "default";
  this.year = "0000";
  this.storage = "0GB";

}


//Decorator, Structural


var cellPhone = new Phone();

cellPhone.setModel = function(modelName) {
    cellPhone.model = modelName;
};

cellPhone.setYear = function(year) {
  cellPhone.year = year;
};

cellPhone.setStorage = function(gb) {
  cellPhone.storage = gb;
};

//iterator, behavioral 

$.each(["OSX","Windows","Linux"], function(index, value) {
  $(".iter").append("<li>" + value + "</li>");
});

//composite, structural 

$("li").addClass("active"); //changes all li's to an active class

//singleton, Creational

var lteConnection = (function () {

  var instance;

  function init() {

    var lteConn = true;

    //this is to test the singleton works
    var privateRandomNumber = Math.random();

    return {

      connStatus: function () {
        return lteConn;
      },

      getRandomNumber: function() {
        return privateRandomNumber;
      }

    };

  }
  return {

    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();