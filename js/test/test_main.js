test("Car Constructor", function(){
  function cc(model,year,miles) {
    var testCar = new Car(model,year, miles);
    equal(testCar.model,model);
    equal(testCar.year,year);
    equal(testCar.miles,miles);

  }

  cc("lumina",1997,162000);
  cc("Tesla",2014,150);

});

test("Singleton", function() {

    var singleA = mySingleton.getInstance();
    var singleB = mySingleton.getInstance();
    equal(singleA,singleB);


});

test("Vechile Decorator", function() {
  var testInst = new vechile();
  equal(testInst.vechileType,"car");
  equal(testInst.model,"default");
  equal(testInst.license,"00000-000");
});

test("Truck Decorator",function() {

  truck.setModel("F-150");
  truck.setColor("Silver");
  equal(truck.model,"F-150");
  equal(truck.color,"Silver");
});

test("MacBook", function() {
  var macbook = new MacBook();

  memory(macbook);
  engraving(macbook);
  insure(macbook);

  equal(macbook.cost(),1522);
  equal(macbook.screenSize(),11.6);
});
