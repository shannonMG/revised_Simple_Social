import React from 'react';
import styles from './CircleCard.module.css';

interface CircleCardProps {
  image: string;
  title: string;
  summary: string;
  circleLink: string;
}

const CircleCard: React.FC<CircleCardProps> = ({ image, title, summary, circleLink }) => {
  return (
    <div className={styles.circleCard}>
      <div className={styles.circleCardInner}>
        {/* Front Side */}
        <div className={styles.circleCardFront}>
          <h3 className={styles.circleCardTitle}>{title}</h3>
          <img src={image} alt={title} className={styles.circleCardImage} />
        </div>

        {/* Back Side */}
        <div className={styles.circleCardBack}>
          <h3 className={styles.circleCardTitleBack}>{title}</h3>
          <p className={styles.circleCardSummary}>{summary}</p>
          <div className={styles.circleCardLinks}>
            <a href={circleLink} target="_blank" rel="noopener noreferrer" className={styles.circleCardLink}>
              Visit Circle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleCard;
