test("prettydate.format", function() {
    function date(then, expected) {
      equal(prettyDate.format("2008/01/28 22:25:00", then),
        expected);
    }
    date("2008/01/28 22:24:30", "just now");
    date("2008/01/28 22:23:30", "1 minute ago");
    date("2008/01/28 21:23:30", "1 hour ago");
    date("2008/01/27 22:23:30", "Yesterday");
    date("2008/01/26 22:23:30", "2 days ago");
    date("2007/01/26 22:23:30", undefined);
  });

  function domtest(name, now, first, second) {
    test(name, function() {
      var links = document.getElementById("qunit-fixture")
        .getElementsByTagName("a");
      equal(links[0].innerHTML, "January 28th, 2008");
      equal(links[2].innerHTML, "January 27th, 2008");
      prettyDate.update(now);
      equal(links[0].innerHTML, first);
      equal(links[2].innerHTML, second);
    });
  }
  domtest("prettyDate.update", "2008-01-28T22:25:00Z",
    "2 hours ago", "Yesterday");
  domtest("prettyDate.update, one day later", "2008/01/29 22:25:00",
    "Yesterday", "2 days ago");

  test("add", function() {
    function adds(x,y,ans) {
      equal(add(x,y),ans);
    }
    adds(3,4,7);

  });