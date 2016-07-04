"use strict";

var addBread = require("./bread.js");
var addCheese = require("./cheese.js");
var addCondiment = require("./condiment.js");
var addMeat = require("./meat.js");
var addVeggie = require("./veggies.js");

var finalSandwichPrice = null;

var meatChoice;
var cheeseChoice;
var condimentChoice;
var veggieChoice;
var breadChoice;

$("#meat-chooser").change((event) => {
  meatChoice = addMeat(event.target.value);
  console.log("meatChoice", meatChoice);
});

$("#cheese-chooser").change((event) => {
  cheeseChoice = addCheese(event.target.value);
  console.log("cheeseChoice", cheeseChoice);
});

$("#condiment-chooser").change((event) => {
  condimentChoice = addCondiment(event.target.value);
  console.log("condimentChoice", condimentChoice);
});

$("#bread-chooser").change((event) => {
  breadChoice = addBread(event.target.value);
  console.log("breadChoice", breadChoice);
});

$("#veggie-chooser").change((event) => {
  veggieChoice = addVeggie(event.target.value);
  console.log("veggieChoice", veggieChoice);
});

// add values of chosen products and output total to DOM
$("#buildIt").click(() => {
  finalSandwichPrice = meatChoice + cheeseChoice + condimentChoice + veggieChoice + breadChoice;
  console.log("finalSandwichPrice", finalSandwichPrice);
  $("#output").append(finalSandwichPrice.toFixed(2));
});
