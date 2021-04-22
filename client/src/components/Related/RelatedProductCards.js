import React from 'react';
import ProductCard from './ProductCard.js'
import styles from './relatedItems.module.css'
import { dummyProductStyles } from './dummyData.js'

const RelatedProductCards = (props) => {
  return (
    <div id={styles.relatedProductsContainer}>
      {props.products.map((product, index) => {
        return <ProductCard product={product} image={dummyProductStyles.results[1].photos[0].thumbnail_url} key={index} />
      })}
    </div>
  )
};

export default RelatedProductCards;