import { findAverageStars, findAverageReviews } from '../../../../components/Reviews/Ratings/utils';
import { metaDataReviews } from '../../../../dummy_data/meta-reviews.js';

describe('Utils helper functions', () => {
  it('findAverageStars Should find the average amount of stars', () => {
    const { ratings } = metaDataReviews;
    /**
     * ratings ->  "4": "1", "5": "1" => (4 * 1) + (5 * 1) = 9
     * 9 / ratings.length (2) = 4.5
     */
    const expectedAverage = 4.5;
    expect(findAverageStars(ratings)).toBe(expectedAverage);
  });
});