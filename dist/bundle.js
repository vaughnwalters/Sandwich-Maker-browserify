(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./bread.js":2,"./cheese.js":3,"./condiment.js":4,"./meat.js":5,"./veggies.js":6}],2:[function(require,module,exports){
"use strict";

var breadPrices = {
  "white": 2.60,
  "wheat": 2.65,
  "rye": 2.50,
  "none": 0
};

var addBread = function(bread) {
  return breadPrices[bread];
};

module.exports = addBread;
},{}],3:[function(require,module,exports){
"use strict";

  var cheesePrices = {
    "swiss": 0.60,
    "cheddar":0.60,
    "mozz": 0.70,
    "none": 0
  };

  var addCheese = function(cheese) {
    return cheesePrices[cheese];
  };

module.exports = addCheese;
},{}],4:[function(require,module,exports){
"use strict";

var condimentPrices = {
  "mayo": 0.10,
  "mustard": 0.15,
  "ketchup": 0.0,
  "none": 0
};

var addCondiment = function(condiment) {
  return condimentPrices[condiment];
};

module.exports = addCondiment;

},{}],5:[function(require,module,exports){
"use strict";

  var meatPrices = {
    "turkey": 0.90,
    "bacon": 1.50,
    "bear": 3.00,
    "none": 0
  };
 
  var addMeat = function(meat) {
    return meatPrices[meat];
  };

module.exports = addMeat;

//  // // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var meatPrices = {
//     "turkey": 0.90,
//     "bacon": 1.50,
//     "bear": 3.00,
//     "none": 0
//   };
 
//   // Augment the original object with another method
//   maker.addMeat = function(meat) {
//     console.log(meat);
//     return meatPrices[meat];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker || {});

//  
},{}],6:[function(require,module,exports){
"use strict";

  var veggiePrices = {
    "avocado": 1.60,
    "tomato": 0.65,
    "onion": 0.50,
    "none": 0
  };

  var addVeggie = function(veggie) {
    return veggiePrices[veggie];
  };

module.exports = addVeggie;
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
