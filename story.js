var first = prompt("Write an adjective");

var sentence1 =
  "<h2>We are going to take a trip to a/an " + first + " destination";

var first = prompt("Write an adjective");
var second = prompt("Write an adjective");
var third = prompt("Write a noun");
var fourth = prompt("Write a verb");
var fifth = prompt("Write a place to sleep");
var sixth = prompt("Write a name of a country");

alert("You're finished!");

sentence1 +=
  " with our " +
  second +
  " " +
  third +
  ". " +
  "We will " +
  fourth +
  " in the water. ";

sentence1 +=
  "We will rest in the " + fifth + " and go hiking in " + sixth + ".</h2>";

document.write(sentence1);

// document.write(
//   "We are going to take a trip to a/an " +
//     first + " destination with our " +
//     second + " " + third + ". " + "We will " + fourth + " in the water. " +
//     "We will rest in the " + fifth + " and go hiking in " + sixth + "."
// );
