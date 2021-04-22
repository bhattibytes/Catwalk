import { findAverageStars, findAverageRecommend, createRatingBar } from '../../../../components/Reviews/Ratings/utils';
import { metaDataReviews } from '../../../../dummy_data/meta-reviews.js';

describe('Utils helper functions', () => {
  /**
    * ratings ->  "4": "1", "5": "1" => (4 * 1) + (5 * 1) = 9
    * 9 / 2 (ratings.length) = 4.5
  */
  it('findAverageStars Should find the average amount of stars', () => {
    const { ratings } = metaDataReviews;
    const expectedAverage = 4.5;
    expect(findAverageStars(ratings)).toBe(expectedAverage);
  });
  /**
   * recommend -> "false": "1", "true": "1" => 1 + 1 = 2
   * 2 (amount of total recommends) / 1 (amount of true)= 0.5 (50%)
   */
  it('findAverageRecommendations Should find the average amount of recommendations', () => {
    const { recommended } = metaDataReviews;
    const expectedRecommend = .50;
    expect(findAverageRecommend(recommended)).toBe(expectedRecommend);
  });

  it('creatRatingBar Should create rating bar styles for each rating', () => {
    const { ratings } = metaDataReviews;
    const expectedObject = {
      rating: "5",
      style: {
        background: `linear-gradient(to right, #4d4d4d 50%, #80808030 0%)`
      }
    };
    // createRatingBar returns an array, grab the last item (object of 5th rating)
    const actualObject = createRatingBar(ratings)[0];
    expect(actualObject).toMatchObject(expectedObject);
  });
});