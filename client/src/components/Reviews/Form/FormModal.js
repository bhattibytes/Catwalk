import React from 'react';
import { characteristicMap, starRatingExperience } from './characteristics.js';
import { toggleFormModal, addReview } from '../../../actions/reviews.js';
import './form-modal.css';

class FormModal extends React.Component {
  constructor() {
    super();
    this.state = {
      characteristicsArray: [],
      photos: [],
      images: [],
      errors: {}
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
      const characteristic = characteristicMap[key];
      characteristic.id = characteristics[key].id;

      results.push(characteristic);
    }

    this.setState({
      characteristicsArray: results
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePhotosChange(e) {
    const { images, photos } = this.state;
    if (images.length === 5) {
      alert('Reached max photos for upload');
    } else {
      this.setState({
        photos: [...photos, e.target.value]
      });
      this.readImageFile(e.target);
    }
  }

  handleCharacteristicChange(e) {
    const key = `${e.target.name}`;

    this.setState({
      characteristics: {
        ...this.state.characteristics,
        [key]: Number(e.target.value)
      }
    });
  }

  readImageFile(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function(e) {
        this.setState({
          images: [...this.state.images, e.target.result]
        })
      }.bind(this);
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }

  submit() {
    const { dispatch, product } = this.props;
    // Get mandatory inputs
    const inputs = ['rating', 'body', 'recommend', 'name', 'email', 'characteristics'];
    let errorsObj = {}
    for (const input of inputs) {
      // if no value is present
      if (!this.state[input]) {
        errorsObj[input] = 'Please insert value'
      }
    }

    // Check if the body is less than 51 characters
    const bodyReview = this.state.body || '';
    if (bodyReview.length < 51) {
      errorsObj['body'] = 'Please insert more than 50 characters';
    }

    const characteristics = this.state.characteristics || {};
    // Get the object keys for current characteristic selected
    const charKeys = Object.keys(characteristics);
    // Check if all characteristic qualities have been filled out
    if (charKeys.length !== this.state.characteristicsArray.length) {
      errorsObj['characteristics'] = 'Please fill all review characteristic';
    }
    this.setState({
      errors: errorsObj
    });

    // Check to see if there are no errors in the object
    if (Object.keys(errorsObj).length === 0) {
      // Submit, make dispatch call
      // Create a new review object from state
      const newReview = {
        product_id: product.data.id,
        ...this.state
      }
      // Remove unwanted properties in new review object
      delete newReview['characteristicsArray'];
      delete newReview['errors'];
      delete newReview['images'];
      // Convert rating to integer
      newReview['rating'] = Number(newReview['rating']);
      // Convert recommend to boolean
      newReview['recommend'] = Boolean(newReview['recommend']);
      // Make dispatch to Redux
      dispatch(addReview(newReview));
    }
  }

  render() {
    const { dispatch, meta } = this.props;
    const { characteristicsArray, rating, reviewLength, images } = this.state;
    const emptyStar = String.fromCodePoint(9734);
    const filledStar = String.fromCodePoint(9733);
    console.log(this.state)
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <h2>Write a Review</h2>
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
                  {/* Error message for rating */}
                  {(this.state.errors.rating) ? <p className='err-msg'>*Select a rating</p> : ''}
                </div>
                {/* Summary review */}
                <h3>Write a summary for review</h3>
                <textarea
                  name='summary' maxLength="60" value={this.state.summary}
                  className='summary-textarea ' onChange={(e) => this.handleChange(e)}></textarea>
                <p>{(this.state.summary) ? this.state.summary.length : 0} / 60</p>
              </div>
              {/* Body review */}
              <div>
                <h3>Write review (mandatory)</h3>
                <textarea
                  name='body' minLength="50" maxLength="1000"
                  className={(!this.state.errors.body) ? 'body-textarea' : 'body-textarea err-element'}
                  onChange={(e) => this.handleChange(e)}></textarea>
                {/* Error message for body */}
                {(this.state.errors.body) ? <p className='err-msg'>*Insert more than 50 characters</p> : ''}
                <p>{(this.state.body) ? this.state.body.length : 0} / 1000</p>
              </div>
              <div>
                <h3>Do you recommend this product ? (mandatory)</h3>
                <input name='recommend' onChange={(e) => this.handleChange(e)} value={true} type='radio' /> Yes
                <input name='recommend' onChange={(e) => this.handleChange(e)} value={false} type='radio' /> No
                {/* Error message for recommend */}
                {(this.state.errors.recommend) ? <p className='err-msg'>*Select a recommendation</p> : ''}
              </div>
              <div>
                <h3>Name (mandatory)</h3>
                <input type='text' name='name' onChange={(e) => this.handleChange(e)} className={(!this.state.errors.name) ? '' : 'err-element'} />
                {/* Error message for name */}
                {(this.state.errors.name) ? <p className='err-msg'>*Insert name</p> : ''}
              </div>
              <div>
                <h3>Email (mandatory)</h3>
                <input type='email' name='email' onChange={(e) => this.handleChange(e)} className={(!this.state.errors.email) ? '' : 'err-element'} />
                {/* Error message for email */}
                {(this.state.errors.email) ? <p className='err-msg'>*Insert email</p> : ''}
              </div>
            </div>
            <div>
              <h2>Characteristics (mandatory)</h2>
              <div className='characteristic-container'>
                {characteristicsArray.map((characteristic, idx) =>
                  <div key={idx}>
                    <h3>{characteristic.type}</h3>
                    <div className='character-input-container'>
                      <input type='radio' name={characteristic.id} value={1} onChange={(e) => this.handleCharacteristicChange(e)} /> {characteristic['1']}
                      <input type='radio' name={characteristic.id} value={2} onChange={(e) => this.handleCharacteristicChange(e)} /> {characteristic['2']}
                      <input type='radio' name={characteristic.id} value={3} onChange={(e) => this.handleCharacteristicChange(e)} /> {characteristic['3']}
                      <input type='radio' name={characteristic.id} value={4} onChange={(e) => this.handleCharacteristicChange(e)} /> {characteristic['4']}
                      <input type='radio' name={characteristic.id} value={5} onChange={(e) => this.handleCharacteristicChange(e)} /> {characteristic['5']}
                    </div>
                  </div>
                )}
                {/* Error message for body */}
                {(this.state.errors.characteristics) ? <p className='err-msg'>*Fill out characteristic</p> : ''}
              </div>
              {/* File image upload */}
              <div>
                <h3>Upload a photo</h3>
                <input type='file' multiple name='photos' onChange={(e) => this.handlePhotosChange(e)} />
                <div className='thumbnail-preview-container'>
                  {images.map((image, idx) =>
                    <div key={idx}>
                      <img src={image} className='thumbnail-preview' />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='add-review-button'
              onClick={this.submit}>Add Review</div>
          </div>
        </div>
      </div>
    );
  }
};
export default FormModal;