import React from 'react';
import ProductInfo from './ProductInfo.js';
import styles from './relatedItems.module.css'
import ProductComparisonButton from './ProductComparisonButton';


const ProductImage = (props) => {

  return (
      <div className={styles.img}>
        {/* <img src={props.image} className={styles.img}/> */}
        <ProductComparisonButton relatedId={props.relatedId} data={props.data} index={props.index} movement={props.movement}/>
      </div>

  )
};

export default ProductImage;