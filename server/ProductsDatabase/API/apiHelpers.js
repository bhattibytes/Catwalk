const  popularStyles = require('../DB/popularStyles.js');
const popularProducts = require('../DB/popularProducts.js');

const isRelatedPopular = (id) => {
  if (id == 1) {
    return [2, 3, 8, 7];
  }
  if (id == 2) {
    return [3, 7, 6, 5];
  }
  if (id == 3) {
    return [5, 9, 7, 2, 1];
  }
  if (id == 4) {
    return [1, 2, 4, 5, 8];
  }
  if (id == 5) {
    return [6, 6, 8, 9, 1, 3];
  }
  return null;
};

var isStylePopular = (id) => {
  if (id == 1) {
    return popularStyles.popular[0];
  }
  if (id == 3) {
    return popularStyles.popular[1];
  }
  if (id == 4) {
    return popularStyles.popular[2];
  }
  if (id == 5) {
    return popularStyles.popular[3];
  }
  return null;
}

var isProductPopular = (id) => {
  if (id == 1) {
    return popularProducts.popular[0];
  }
  if (id == 2) {
    return popularProducts.popular[1];
  }
  if (id == 3) {
    return popularProducts.popular[2];
  }
  if (id == 4) {
    return popularProducts.popular[3];
  }
  if (id == 5) {
    return popularProducts.popular[4];
  }
  return null;
}

module.exports = { isRelatedPopular, isStylePopular, isProductPopular };