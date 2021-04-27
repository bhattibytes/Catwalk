import React from 'react';
import { characteristicMap } from './characteristics.js';
import { toggleFormModal } from '../../../actions/reviews.js';
import './form-modal.css';

class FormModal extends React.Component {
  constructor() {
    super();
    this.state = {
      characteristics: []
    }
  }
  componentDidMount() {
    const { dispatch, meta } = this.props;
    const { characteristics } = meta;
    const results = [];
    for (let key in characteristics) {
      results.push(characteristicMap[key]);
    }
    this.setState({
      characteristics: results
    });
  }
  render() {
    const { dispatch, meta } = this.props;
    const { characteristics } = this.state;
    // console.log(characteristics)
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => dispatch(toggleFormModal())}>&times;</span>
          <h2>Write a Review</h2>
          <div>
            <h4>How would you rate this product ?</h4>
            <div>
              <span className='star-review'>&#9734;</span>
              <span className='star-review'>&#9734;</span>
              <span className='star-review'>&#9734;</span>
              <span className='star-review'>&#9734;</span>
              <span className='star-review'>&#9734;</span>
            </div>
            <div>
              <h2>Do you recommend this product ? (mandatory)</h2>
              <input name='yes' type='radio' /> Yes
              <input name='no' type='radio' /> No
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
            <div>
              <h3>Write a summary for review</h3>
              <textarea>

              </textarea>
            </div>
            <div>
              <h3>Write review (mandatory)</h3>
              <textarea>

              </textarea>
            </div>
            <div>
              <h3>Upload a photo</h3>
              <input type='file' />
            </div>
            <div>
              <h3>Nickname (mandatory)</h3>
              <input type='text' />
            </div>
            <div>
              <h3>Email (mandatory)</h3>
              <input type='email' />
            </div>
          </div>
        </div>

      </div>
    );
  }
};
export default FormModal;