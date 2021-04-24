import React from 'react';
import ProductInfo from './ProductInfo.js';
import styles from './relatedItems.module.css'


const ProductCard = (props) => {

  return (
    <div className={styles.productCard}>
      {/* <button className='action-button' /> */}
      <div className={styles.img}>
        <img src={props.image} className={styles.img}/>
      </div>
      <ProductInfo relatedId={props.relatedId} image={props.image} data={props.data} index={props.index} movement={props.movement}/>
    </div>
  )
};

export default ProductCard;