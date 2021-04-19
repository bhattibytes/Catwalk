/**
 * @param {ratings} obj
 * findAverageStars takes in an object of ratings and returns that average number.
 * Sum the number of stars times its weight, and then divide it through by the total
 * number of reviews
 */
function findAverageStars(ratings) {
  const keys = Object.keys(ratings);
  const numOfRatings = keys.length;
  let totalNumberOfReviews = 0;
  let totalSum = 0;
  for (let key of keys) {
    // Get rating
    const rating = Number(key);
    // Get the weight of rating (how many times user chose this rating)
    const weight = Number(ratings[key]);
    // Calculate the amount of total reviews by weight
    totalNumberOfReviews += weight;
    // Calculate the total sum of (rating * weight)
    totalSum += rating * weight;
  }
  return totalSum / totalNumberOfReviews;
};

function findAverageReviews() {

};

export { findAverageStars, findAverageReviews };