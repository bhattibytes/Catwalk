import React from 'react';
import { toggleFormModal } from '../../../actions/reviews.js';
import './form-modal.css';

const FormModal = ({ dispatch }) => (
  <div id="myModal" className="modal">
    <div className="modal-content">
      <span className="close" onClick={()=> dispatch(toggleFormModal())}>&times;</span>
      <h2>Write a Review</h2>
    </div>

  </div>
);

export default FormModal;