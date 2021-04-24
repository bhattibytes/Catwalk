import React from 'react';
import { toggleModal } from '../../../actions/reviews.js';
import './modal.css';

const Modal = ({ image, dispatch }) => (
  <div id="myModal" className="modal">

    <div className="modal-content">
      <span className="close" onClick={()=> dispatch(toggleModal())}>&times;</span>
      <img src={image} className='modal-image'/>
    </div>

  </div>
);

export default Modal;