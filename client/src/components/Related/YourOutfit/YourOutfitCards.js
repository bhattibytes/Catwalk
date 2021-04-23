import React from 'react';
import ProductCard from './ProductCard.js'
import styles from './relatedItems.module.css'
import AddOutfit from './AddOutfit.js'
import { dummyProductStyles, dummyFeature } from './dummyData.js'

const YourOutfitCards = (props) => {

  return (
    // How to map mutiple arrays ?
    <div id={styles.relatedProductsContainer}>
      <AddOutfit />
      {props.products.map((product, index) => {
        return <ProductCard product={product} image={dummyProductStyles.results[1].photos[0].thumbnail_url} feature={dummyFeature} key={index} />
      })}
    </div>
  )
};

export default YourOutfitCards;