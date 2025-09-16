// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard.jsx';
import '../styles.css';
import NewsImage from '../images/news-image.jpg';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  const newsData = [
    {
      _id: 1,
      headline: 'Tech Innovation in 2025',
      description: 'New technologies are transforming the world in unexpected ways. Here’s what to expect...',
      image: NewsImage,
    },
    {
      _id: 2,
      headline: 'Global Climate Update',
      description: 'Global temperatures are reaching new highs. Climate action is more urgent than ever.',
      image: NewsImage,
    },
    {
      _id: 3,
      headline: 'AI Changing Education',
      description: 'AI tools are revolutionizing how students learn and teachers teach.',
      image: NewsImage,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setNews(newsData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">Latest News</h2>
      <div className="news-grid">
        {loading
          ? Array(3).fill().map((_, i) => (
              <NewsCard key={i} isLoading={true} />
            ))
          : news.map((article) => (
              <NewsCard
                key={article._id}
                title={article.headline}
                description={article.description}
                image={article.image}
                isLoading={false}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
