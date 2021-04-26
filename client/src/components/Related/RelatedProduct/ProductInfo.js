import React from 'react';
import Star from '../../Star/Star.js'
import styles from './relatedItems.module.css'

const ProductInfo = (props) => {
  let index = props.index + props.movement;
  let id = props.relatedId;
  let data = props.data;

  let category = data.dummyRelatedProducts.[index].category;
  let name = data.dummyRelatedProducts[index].name;
  let price = data.dummyRelatedProducts[index].default_price;
  return (
    <div className={styles.productInfo}>
      <h5 className={styles.productText}>{category}</h5>
      <h4 className={styles.productText}>{name}</h4>
      <h5 className={styles.productText}>{price}</h5>
      <div className={styles.productText}>
        <Star rating={4.0}/>
      </div>
    </div>
  )
};

export default ProductInfo