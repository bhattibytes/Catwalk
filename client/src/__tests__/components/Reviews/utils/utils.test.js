import { findAverageStars, findAverageReviews } from '../../../../components/Reviews/Ratings/utils';
import { metaDataReviews } from '../../../../dummy_data/meta-reviews.js';

describe('Utils helper functions', () => {
  it('findAverageStars Should find the average amount of stars', () => {
    const { ratings } = metaDataReviews;
    findAverageStars(ratings);
  });
});