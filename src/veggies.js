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