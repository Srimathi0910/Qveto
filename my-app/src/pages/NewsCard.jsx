import React from 'react';
import '../styles.css';

const NewsCard = ({ title, description, image, isLoading }) => {
  return (
    <div className="news-card">
      {isLoading ? (
        <div className="skeleton skeleton-image" />
      ) : (
        <div className="news-image" style={{ backgroundImage: `url(${image})` }}>
          <div className="overlay" />
          <div className="watermark">© News Blog</div>
        </div>
      )}

      <div className="news-content">
        {isLoading ? (
          <>
            <div className="skeleton skeleton-title" />
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text short" />
          </>
        ) : (
          <>
            <h3 className="news-headline">{title}</h3>
            <p className="news-description">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
