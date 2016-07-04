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