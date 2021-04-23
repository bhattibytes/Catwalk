import { findAverageStars, findAverageRecommend, createRatingBar, createCharacteristics } from '../../../../components/Reviews/Ratings/utils';
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
  /**
   *
   */
  it('createCharacteristics should return an array based off each characteristic objects', () => {
    const { characteristics } = metaDataReviews;
    const expectedArr = [
      {
        id: 57222,
        value: '4.0000000000000000',
        type: 'Fit',
        beginning: 'Too tight',
        middle: 'Perfect',
        end: 'Too long'
      },
      {
        id: 57223,
        value: '3.5000000000000000',
        type: 'Length',
        beginning: 'Too short',
        middle: 'Perfect',
        end: 'Too long'
      },
      {
        id: 57224,
        value: '5.0000000000000000',
        type: 'Comfort',
        beginning: 'Uncomfortable',
        middle: 'Ok',
        end: 'Perfect'
      },
      {
        id: 57225,
        value: '4.0000000000000000',
        type: 'Quality',
        beginning: 'Poor',
        middle: 'Expected',
        end: 'Perfect'
      }
    ];
    const actualArr = createCharacteristics(characteristics);
    expect(actualArr).toMatchObject(expectedArr);
  });
});