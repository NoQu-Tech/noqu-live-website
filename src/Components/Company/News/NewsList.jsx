import React, { useEffect } from 'react';
import "./NewsList.css"
import { Link } from 'react-router-dom';
import news_img1 from '../../../assets/news_img1.jpeg'
const NewsList = ({ newsItems }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ width: "95%" }}>
            {/* {newsItems.map((news) => (
                <div className='newsblog' key={news.id} style={{ marginBottom: '20px' }}>
                    <div className="newsblog-img">
                    <img src={news.image} alt={news.title} style={{ width: '200px' }} />
                    <img src={`https://noqu.co.in${news.image}`} alt={news.title} style={{ width: '200px' }} />
                    </div>
                    <div className="newsblog-content">
                    <h3>{news.title}</h3>
                    <p>{news.shortContent}</p>
                    <Link to={`/news/${news.slug}`}><button>Read More</button></Link>
                    </div>
                    <br />                       
                </div>
            ))} */}

            {newsItems.map((news) => (
            <div className='newsblog' style={{ marginBottom: '20px' }}>
                <div className="newsblog-img">
                    <img src={`https://noqu.in/uploads/${news.thumbnail}`} />
                </div>
                <div className="newsblog-content">
                    <div>
                        <h3>{news.title}</h3>
                        <p>{news.shortContent}</p>
                    </div>
                    <span>
                        <Link to={`/news/${news.slug}`}><button>Read More</button></Link>
                    </span>
                </div>
                <br />
            </div>
            ))}



            {/* <div className='newsblog' style={{ marginBottom: '20px' }}>
                <div className="newsblog-img">
                    <img src={news_img1} />
                </div>
                <div className="newsblog-content">
                    <div>
                    <h3>NoQu Signs MoU with Anna University Incubation Foundation for Mentorship Program</h3>
                    <p>NoQu is thrilled to be associated with Anna Incubator, making it a significant step that promises to fuel its entrepreneurial journey. Becoming an Incubatee under Anna Incubator means that NoQu will benefit from the guidance of expert mentors who bring real-world experience to the table.</p>
                    </div>
                    <span>
                        <Link to="news"><button>Read More</button></Link>
                    </span>
                </div>
                <br />
            </div> */}
        </div>
    );
};

export default NewsList;
