import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  popup: string;
  popupHeader: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, popup, popupHeader }) => {
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
        <img src={popup} alt={popupHeader} className={styles.popupImage} /> 
      </div>
    </div>
  );
};

export default Card;
