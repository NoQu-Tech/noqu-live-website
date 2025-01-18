import React, { useEffect, useState } from 'react'
import "./News.css"
import NewsList from './NewsList'


const News = () => {

    const [newsItems, setNewsItems] = useState([]);
  
    useEffect(() => {
      // fetch('http://localhost:3003/db/news')
      fetch('https://noqu.in/db/news')
        .then((response) => response.json())
        .then((data) => setNewsItems(data))
        .catch((err) => console.error('Error fetching news:', err));
    }, []);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='News'>
    <h1>News</h1>
    <div className="News-list">
        <NewsList newsItems={newsItems} />
    </div>
  </div>

  )
}

export default News