import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./NewsDetail.css"

const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // fetch(`http://localhost:3003/db/news/slug/${slug}`)
    fetch(`https://noqu.in/db/news/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((err) => console.error('Error fetching news details:', err));
  }, [slug]);

  if (!news) return <p>Loading...</p>;

  return (
    <div className='NewsDetail'>
    <h1 className='TAM_h1'>{news.title}</h1>
    <div className="NewsDetail-content">
      <div className="NewsDetail-img1">
        <img src={news.image} style={{ width: '100%' }} />
      </div>
      <p>{news.detailedContent}</p>
    </div>

    <div className="NewsDetail-backButton">
      <Link to="/News" ><button>Back</button></Link>
    </div>
  </div>
  );
};

export default NewsDetail;