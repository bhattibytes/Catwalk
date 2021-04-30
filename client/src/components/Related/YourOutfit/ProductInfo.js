import React from 'react';
import Star from '../../Star/Star.js'
import styles from './yourOutfit.module.css'

const ProductInfo = (props) => {
  let index = props.index + props.movement;
  let id = props.relatedId;
  let data = props.data;

  let category = data.dummyRelatedProducts.[index].category;
  let name = data.dummyRelatedProducts[index].name;
  let price = data.dummyRelatedProducts[index].default_price;
  let starRating = data.dummyRelatedProducts[index].rating;

  if (props.movement === 1) {
    return (
      <div className={styles.description}>
        <div className={styles.category}>{category}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{`$${price}`}</div>
        <div className={styles.star}>
          <Star rating={starRating}/>
        </div>
      </div>
  )
  } else {
    return (
      <div className={styles.productInfo}>
        <div className={styles.category}>{category}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.star}>
          {/* <Star rating={starRating}/> */}
        </div>
      </div>
    )}
};

export default ProductInfo;