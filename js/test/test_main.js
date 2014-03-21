test("Phone Default Constructor Test", function(){
  function phoneDefault() {
    var testPhone = new Phone();
    equal(testPhone.model,"default");
    equal(testPhone.year,"0000");
    equal(testPhone.storage,"0GB");

  }
  phoneDefault();


});

test("Singleton: lteConnection", function() {

    var singleA = lteConnection.getInstance();
    var singleB = lteConnection.getInstance();
    equal(singleA,singleB);


});

test("Cell Phone Decorator", function() {
  cellPhone.setModel("iPhone");
  cellPhone.setYear("2014");
  cellPhone.setStorage("32GB");


  equal(cellPhone.model,"iPhone");
  equal(cellPhone.year,"2014");
  equal(cellPhone.storage,"32GB");

});

test("Iterator", function() {
  var list = ["OSX","Windows","Linux"];
  var ul = document.getElementsByTagName("li");
  for (var i = 0; i < 3; i++) {
    equal(ul[i].innerHTML,list[i]);
  }
});

test("Composite", function() {
  var li = document.getElementsByTagName("li");
  var active = document.getElementsByClassName("active");

  for (var i =0; i < 3; i++) {
    equal(li[i],active[i]);
  }

});