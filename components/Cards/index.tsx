import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description, imageUrl, popup, popupHeader }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      {/* Popup container */}
      <div className={styles.popup}>
        <h2>{popupHeader}</h2>
        <p>{popup}</p>
      </div>
    </div>
  );
};

export default Card;