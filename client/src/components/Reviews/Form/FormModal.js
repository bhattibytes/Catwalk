import React from 'react';
import { characteristicMap, starRatingExperience } from './characteristics.js';
import { toggleFormModal } from '../../../actions/reviews.js';
import './form-modal.css';

class FormModal extends React.Component {
  constructor() {
    super();
    this.state = {
      characteristics: [],
      photos: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePhotosChange = this.handlePhotosChange.bind(this);
    this.handleCharacteristicChange = this.handleCharacteristicChange.bind(this);
    this.submit = this.submit.bind(this);
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePhotosChange(e) {
    const { photos } = this.state;
    if (photos.length === 5) {
      alert('Reached max photos for upload');
    } else {
      this.setState({
        photos: [...photos, e.target.value]
      });
    }
  }

  handleCharacteristicChange(e) {
    this.setState({
      characteristic: {
        ...this.state.characteristic,
        [e.target.name]: e.target.value
      }
    });
  }

  submit() {
    // Get mandatory inputs
    const { rating, body, recommend, nickname, email, characteristic } = this.state;
    const inputs = ['rating', 'body', 'recommend', 'nickname', 'email', 'characteristic'];
    let errorsObj = {}
    for (const input of inputs) {
      // if no value is present
      if (!this.state[input]) {
        errorsObj[input] = 'please insert value'
      }
    }
    this.setState({
      errors: errorsObj
    });
  }

  render() {
    const { dispatch, meta } = this.props;
    const { characteristics, rating, reviewLength } = this.state;
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
                    className='star-radio' onChange={(e) => this.handleChange(e)} />
                  <label htmlFor='star1'>
                    {(Number(rating) >= 1) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star2' name='rating' value={2}
                    className='star-radio' onChange={(e) => this.handleChange(e)} />
                  <label htmlFor='star2'>
                    {(Number(rating) >= 2) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star3' name='rating' value={3}
                    className='star-radio' onChange={(e) => this.handleChange(e)} />
                  <label htmlFor='star3'>
                    {(Number(rating) >= 3) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star4' name='rating' value={4}
                    className='star-radio' onChange={(e) => this.handleChange(e)} />
                  <label htmlFor='star4'>
                    {(Number(rating) >= 4) ? filledStar : emptyStar}
                  </label>
                  <input type='radio' id='star5' name='rating' value={5}
                    className='star-radio' onChange={(e) => this.handleChange(e)} />
                  <label htmlFor='star5'>
                    {(Number(rating) === 5) ? filledStar : emptyStar}
                  </label>
                  {/* Text rating for each Star */}
                  <b>{starRatingExperience[Number(rating)]}</b>
                </div>
                <h3>Write a summary for review</h3>
                <textarea name='summary' maxLength = "60" value={this.state.summary} onChange={(e) => this.handleChange(e)}></textarea>
                <p>{(this.state.summary) ? this.state.summary.length : 0} / 60</p>
              </div>
              <div>
                <h3>Write review (mandatory)</h3>
                <textarea name='body' minLength = "50" maxLength = "1000" onChange={(e) => this.handleChange(e)}></textarea>
                <p>{(this.state.body) ? this.state.body.length : 0} / 1000</p>
              </div>
              <div>
                <h2>Do you recommend this product ? (mandatory)</h2>
                <input name='recommend' onChange={(e) => this.handleChange(e)} value={true} type='radio' /> Yes
                <input name='recommend' onChange={(e) => this.handleChange(e)} value={false} type='radio' /> No
              </div>
              <div>
                <h3>Nickname (mandatory)</h3>
                <input type='text' name='nickname' onChange={(e) => this.handleChange(e)} />
              </div>
              <div>
                <h3>Email (mandatory)</h3>
                <input type='email' name='email' onChange={(e) => this.handleChange(e)} />
              </div>
              <div>
                <h3>Upload a photo</h3>
                <input type='file' name='photos' onChange={(e) => this.handlePhotosChange(e)} />
              </div>
            </div>
            <div>
              <h2>Characteristics (mandatory)</h2>
              <div className='characteristic-container'>
                {characteristics.map((characteristic, idx) =>
                  <div key={idx}>
                    <h3>{characteristic.type}</h3>
                    <div className='character-input-container'>
                      <input type='radio' name={characteristic.id} value={1} onChange={(e) => this.handleCharacteristicChange(e)}/> {characteristic['1']}
                      <input type='radio' name={characteristic.id} value={2} onChange={(e) => this.handleCharacteristicChange(e)}/> {characteristic['2']}
                      <input type='radio' name={characteristic.id} value={3} onChange={(e) => this.handleCharacteristicChange(e)}/> {characteristic['3']}
                      <input type='radio' name={characteristic.id} value={4} onChange={(e) => this.handleCharacteristicChange(e)}/> {characteristic['4']}
                      <input type='radio' name={characteristic.id} value={5} onChange={(e) => this.handleCharacteristicChange(e)}/> {characteristic['5']}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button onClick={this.submit}>Add Review</button>
          </div>
        </div>
      </div>
    );
  }
};
export default FormModal;