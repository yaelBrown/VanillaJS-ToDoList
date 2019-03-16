"use strict";

// Verify script is working
console.log("Hello");

var list = ["apple", "orange", "pear", "lemon"];

// display current list
console.log("current list: " + list);

// display name of item you want to add (testing)
var item = "strawberry";
console.log("current item: " + item);

// logic to add item
var addItem = (item) => {
  var temp = [...list];
  temp.unshift(item);
  list = temp;
  return list;
}

// run add item
addItem(item);

// log to console updated list array
console.log(list);

// declare variables
var btns = "<td width='100'><i class='fa fa-minus' aria-hidden='true'></i></td>";
var table = document.getElementById("tableItems");

for (var i = 0 ; i < list.length; i++) {
  // Create row
  var newRow = table.insertRow(0);
  for (var j = 0; j < list[i].length; j++) {
    // create new cell
    var cell = newRow.insertCell(j);

?
  }
}