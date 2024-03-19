import React from 'react';
import styles from './Card.module.css';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  popup: string;
  popupHeader: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, popup, popupHeader }) => {
  return (
    <motion.div whileHover={{ rotate: 360, transition: { duration: 1 } }}>
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
    </motion.div>
  );
};

export default Card;