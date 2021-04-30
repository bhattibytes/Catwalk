import React from 'react';
import ProductInfo from './ProductInfo.js';
import styles from './relatedItems.module.css'
import ProductComparisonButton from './ProductComparisonButton';


const ProductImage = (props) => {
  let data = props.data;
  let index = props.index + props.movement;

  let image = data.dummyRelatedProducts[index].photos[0].thumbnail_url;

  return (
      <div className={styles.cardPictureArea} style={{ backgroundImage: `url(${image})` }}>
        <ProductComparisonButton relatedId={props.relatedId} data={props.data} index={props.index} movement={props.movement}/>
      </div>
  )
};

export default ProductImage;