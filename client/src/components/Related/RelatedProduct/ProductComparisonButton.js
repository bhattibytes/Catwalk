import React, {useEffect, useContext, useState} from 'react';
import styles from './relatedItems.module.css'
import ProductComparison from './ProductComparison.js';

const ProductComparisonButton = props => {
  const [showModal, setShowModal] = useState(false); // note: change back to false

  let openModal = () => {
    setShowModal(!showModal);
  };

  let closeOpenModal = e => {
    if (e.target.id === 'modalBackground') {
      setShowModal(!showModal);
    }
  };

  return (
    <div>
      <button className={styles.comparisonButton} onClick={openModal}><i className={"far fa-star"}></i></button>
      {showModal ? <ProductComparison showModal={showModal} setShowModal={setShowModal} onClick={closeOpenModal} relatedId={props.relatedId} data={props.data} index={props.index} movement={props.movement}/> : null}
    </div>
  )
}

export default ProductComparisonButton;