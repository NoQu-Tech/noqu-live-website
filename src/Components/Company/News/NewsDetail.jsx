import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./NewsDetail.css";

const NewsDetail = () => {
  const { slug } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`https://noqu.in/db/news/slug/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.content && typeof data.content === "string") {
          try {
            data.content = JSON.parse(data.content); // Parse the JSON string
          } catch (error) {
            console.error("Error parsing content:", error);
            data.content = []; // Fallback to an empty array if parsing fails
          }
        }
        setNews(data);
      })
      .catch((err) => console.error("Error fetching news details:", err));
  }, [slug]);

  if (!news) return <p>Loading...</p>;

  const contentArray = Array.isArray(news.content) ? news.content : [];

  return (
    <div className="NewsDetail">
      <h1 className="TAM_h1">{news.title}</h1>
      <div className="NewsDetail-content">
        {contentArray.map((section, index) => (
          <div key={index} className={`layout-${section.layout}`}>
            {section.image && (
              <div className="NewsDetail-img">
                <img src={`https://noqu.in/uploads/${section.image}`} alt={`News ${index}`} />
                {console.log(section.image)}
              </div>
            )}

            <div style={section.image === null ? {
              width:"100%"
                         } : {}} className="NewsDetail-layout-content">
              <p style={section.image === null ? {
              margin:"0px"
                         } : {}}>{section.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="NewsDetail-backButton">
        <Link to="/News">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;
