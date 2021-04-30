import React from 'react';
import styles from './yourOutfit.module.css'

const AddOutfit = () => {
  return (
    <div className={styles.itemCard}>
      <div className={styles.cardContents}>
        <button className={styles.addButton}><i className="fas fa-plus"></i></button>
        <br></br>
        <span className={styles.addText}>Add to Outfit</span>
      </div>
    </div>
  )
};

export default AddOutfit;