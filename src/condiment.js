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
