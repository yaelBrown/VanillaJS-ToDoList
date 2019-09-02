"use strict";

var list = ["apple", "orange", "pear", "lemon"];

// Declare variables
var itemToAdd;
var button = document.getElementById("button");
var listArr = document.getElementById("list");
var ul = document.getElementById("ul");

// add item to list
const addItem = () => {
  list.push(document.getElementById("input").value)
  ul.innerHTML = updateList();
}

// returns string of list elements surrounded by li's
const updateList = () => {
  var temp = "";
  list.map(function(e) {
    temp += "<li>" + e + "</li>"
  })

  return temp;
}

// Print list to screen on page load
ul.innerHTML = updateList();