import React from 'react';
import { characteristicMap, starRatingExperience } from './characteristics.js';
import { toggleFormModal } from '../../../actions/reviews.js';
import './form-modal.css';

class FormModal extends React.Component {
  constructor() {
    super();
    this.state = {
      characteristics: []
    }
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    const { dispatch, meta } = this.props;
    const { characteristics } = meta;
    const results = [];
    // Iterate thru the characteristic map key
    // to filter out what characteristic is needed for
    // this product
    for (let key in characteristics) {
      results.push(characteristicMap[key]);
    }
    this.setState({
      characteristics: results
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { dispatch, meta } = this.props;
    const { characteristics, rating } = this.state;
    const emptyStar = String.fromCodePoint(9734);
    const filledStar = String.fromCodePoint(9733);
    return (
      <div id="myModal" className="modal">
        <h2>Write a Review</h2>
        <div className="modal-content">
          <span className="close" onClick={() => dispatch(toggleFormModal())}>&times;</span>
          <div className='modal-content-container'>
            <div>
              {/* Star rating for each product */}
              <div>
                <h4>How would you rate this product ?</h4>
                <div className='stars-review'>
                  <input type='radio' id='star1' name='rating' value={1}
                    className='star-radio' onChange={(e) => this.onChange(e)} />
                  <label htmlFor='star1'>
                    {(Number(rating) >= 1) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star2' name='rating' value={2}
                    className='star-radio' onChange={(e) => this.onChange(e)} />
                  <label htmlFor='star2'>
                    {(Number(rating) >= 2) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star3' name='rating' value={3}
                    className='star-radio' onChange={(e) => this.onChange(e)} />
                  <label htmlFor='star3'>
                    {(Number(rating) >= 3) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star4' name='rating' value={4}
                    className='star-radio' onChange={(e) => this.onChange(e)} />
                  <label htmlFor='star4'>
                    {(Number(rating) >= 4) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star5' name='rating' value={5}
                    className='star-radio' onChange={(e) => this.onChange(e)} />
                  <label htmlFor='star5'>
                    {(Number(rating) === 5) ? filledStar : emptyStar}
                  </label>
                  {/* Text rating for each Star */}
                  <b>{starRatingExperience[Number(rating)]}</b>
                </div>
                <h3>Write a summary for review</h3>
                <textarea name='summary' onChange={(e) => this.onChange(e)}></textarea>
              </div>
              <div>
                <h3>Write review (mandatory)</h3>
                <textarea name='body' onChange={(e) => this.onChange(e)}></textarea>
              </div>
              <div>
                <h2>Do you recommend this product ? (mandatory)</h2>
                <input name='recommend' value={true} type='radio' /> Yes
                  <input name='recommend' value={false} type='radio' /> No
                </div>
              <div>
                <h3>Nickname (mandatory)</h3>
                <input type='text' name='nickname' onChange={(e) => this.onChange(e)} />
              </div>
              <div>
                <h3>Email (mandatory)</h3>
                <input type='email' name='email' onChange={(e) => this.onChange(e)} />
              </div>
              <div>
                <h3>Upload a photo</h3>
                <input type='file' name='photo' onChange={(e) => this.onChange(e)} />
              </div>
            </div>
            <div>
              <h2>Characteristics (mandatory)</h2>
              <div className='characteristic-container'>
                {characteristics.map((characteristic, idx) =>
                  <div key={idx}>
                    <h3>{characteristic.type}</h3>
                    <div className='character-input-container'>
                      <input type='radio' /> <span>{characteristic['1']}</span>
                      <input type='radio' /> {characteristic['2']}
                      <input type='radio' /> {characteristic['3']}
                      <input type='radio' /> {characteristic['4']}
                      <input type='radio' /> {characteristic['5']}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default FormModal;