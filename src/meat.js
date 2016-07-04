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