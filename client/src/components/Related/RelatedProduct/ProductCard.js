import React from 'react';
import ProductInfo from './ProductInfo.js';
import ProductImage from './ProductImage.js';
import styles from './relatedItems.module.css'


const ProductCard = (props) => {

  return (
    <div className={styles.productCard}>
      <ProductImage relatedId={props.relatedId}  data={props.data} index={props.index} movement={props.movement} />
      <ProductInfo relatedId={props.relatedId}  data={props.data} index={props.index} movement={props.movement}/>
    </div>
  )
};

export default ProductCard;