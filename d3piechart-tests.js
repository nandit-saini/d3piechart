// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by d3piechart.js.
import { name as packageName } from "meteor/d3piechart";

// Write your tests here!
// Here is an example.
Tinytest.add('d3piechart - example', function (test) {
  test.equal(packageName, "d3piechart");
});
