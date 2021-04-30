import React from 'react';
import ProductInfo from './ProductInfo.js';
import styles from './yourOutfit.module.css'


const ProductImage = (props) => {
  let data = props.data;
  let index = props.index + props.movement;
  console.log(data);
  // console.log(data.dummyRelatedProducts);

  let image = data.dummyRelatedProducts[index].photos[0].thumbnail_url;

  return (
      <div className={styles.cardPictureArea} style={{ backgroundImage: `url(${image})` }}>
      </div>
  )
};

export default ProductImage;