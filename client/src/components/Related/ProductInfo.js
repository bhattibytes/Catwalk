import React from 'react';
import Star from '../Star/Star.js'
import styles from './relatedItems.module.css'

const ProductInfo = ({product}) => {
  return (
    <div className={styles.productInfo}>
      <h5 className={styles.productText}>{product.category}</h5>
      <h4 className={styles.productText}>{product.name}</h4>
      <h5 className={styles.productText}>{product.default_price}</h5>
      <div className={styles.productText}>
        <Star rating={4.0}/>
      </div>
    </div>
  )
};

export default ProductInfo