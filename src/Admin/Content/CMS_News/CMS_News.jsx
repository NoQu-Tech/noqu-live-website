import React, { useState } from 'react';
import './CMS_News.css'

const CMS_News = () => {

  const [title, setTitle] = useState('');
  const [shortContent, setShortContent] = useState('');
  const [detailedContent, setDetailedContent] = useState('');
  const [image, setImage] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('shortContent', shortContent);
    formData.append('detailedContent', detailedContent);
    formData.append('image', image);

    try {
      // const response = await fetch('http://localhost:3003/db/add-news', {
      const response = await fetch('https://noqu.in/db/add-news', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        alert('News added successfully!');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error('Error adding news:', err);
    }
  };

  return (
    <>
      <div className="CMS_add-News">
        <div className="CMS-head">

          <h1 className='TAM_h1'>CMS</h1>
        </div>

        <div className='CMS_add-News-form'>
          <form onSubmit={handleSubmit}>
            <h5>Add a News</h5>
            <div className="CMS_add-News-form_row">
              <label>Title:</label>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="CMS_add-News-form_row">
              <label>Short Content:</label>
              <textarea
                placeholder="Short Content"
                value={shortContent}
                onChange={(e) => setShortContent(e.target.value)}
                required
              />
            </div>
            <div className="CMS_add-News-form_row">
              <label>Detailed Content:</label>
              <textarea
                placeholder="Detailed Content"
                value={detailedContent}
                onChange={(e) => setDetailedContent(e.target.value)}
                required
              />
            </div>
            <div className="CMS_add-News-form_row">
              <label>Title Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <div className="CMS_add-News-form_button">
              <button type="submit">Add News</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CMS_News