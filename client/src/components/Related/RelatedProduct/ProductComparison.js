import React, {useEffect, useContext} from 'react';
import styles from './relatedItems.module.css'

const ProductComparison = (props) => {

  let currentId = 17067;
  let comparedId = props.relatedId;

  let currentFeatures = [
    {
        "feature": "Fabric",
        "value": "Canvas"
    },
    {
        "feature": "Buttons",
        "value": "Brass"
    }
  ];

  console.log(props.data);
  let getComparedFeatures = () => {
    for (let i = 0; i < props.data.dummyRelatedProducts.length; i++) {
      if (props.data.dummyRelatedProducts[i].id === comparedId) {
        return props.data.dummyRelatedProducts[i].features;
      }
    }
  };

  let comparedFeatures = getComparedFeatures();


  // combined feature comparisons
  let featureComparison = [];
  // looks like below
  // [
  //   {
  //     feature: 'fabric',
  //     currentProduct: 'canvas',
  //     comparedProduct: '', // if not listed as a feature
  //   },

  //   {
  //     feature: 'lenses',
  //     currentProduct: '',
  //     comparedProduct: 'ultrasheen',
  //   },
  // ]

  let getComparison = () => {
    // loop over currentFeatures
    for (let i = 0; i < currentFeatures.length; i++) {
      for (let key in currentFeatures[i]) {
        // initialize temp object var
        let tempObj = {};
        if (key === 'feature') {
          tempObj.feature = currentFeatures[i].feature;
          tempObj.currentProduct = currentFeatures[i].value;
          tempObj.comparedProduct = '';
          featureComparison.push(tempObj);
        }
      }
    }
    // loop over comparedFeatures
    loop1:
    for (let i = 0; i < comparedFeatures.length; i++) {
      loop2:
      for (let key in comparedFeatures[i]) {
        loop3:
        for (let j = 0; j < featureComparison.length; j++) {
          // if feature already in featureComparison
          if (featureComparison[j].feature === comparedFeatures[i].feature) {
            featureComparison[j].comparedProduct = comparedFeatures[i].value;
            break loop2;
          }
        }
        let tempObj = {};
        if (key === 'feature') {
          tempObj.feature = comparedFeatures[i].feature;
          tempObj.currentProduct = '';
          tempObj.comparedProduct = comparedFeatures[i].value;
          featureComparison.push(tempObj);
        }
      }
    }
  };

  getComparison();

  return (
    <div className={styles.modal} onClick={e => {props.onClick(e)}} id="modalBackground">
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>Products Comparing</h4>
          <div className={styles.productNames}>
            <h5 className={styles.nameOne}>Product 1</h5>
            <h5 className={styles.nameTwo}>Product 2</h5>
          </div>
        </div>
        <div className={styles.modalBody}>
          {featureComparison.map((data, index) => {
            return <div key={index} className={styles.bodyRow}><p className={styles.rowContentLeft}>{data.currentProduct == null ? <i className="fas fa-check"></i> : data.currentProduct}</p><p className={styles.rowContentCenter}>{data.feature}</p><p className={styles.rowContentRight}>{data.comparedProduct == null ? <i className="fas fa-check"></i> : data.comparedProduct}</p></div>
          })}
        </div>
      </div>
    </div>
  )
};

export default ProductComparison;