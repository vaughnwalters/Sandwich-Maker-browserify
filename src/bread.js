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