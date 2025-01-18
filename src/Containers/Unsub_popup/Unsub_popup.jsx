import React, { useEffect, useState } from 'react'
import "./Unsub_popup.css"
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import unsubscribed from '../../assets/unsubscribed.png';

const Unsub_popup = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errormsg, setErrormsg] = useState('');
  const [complete, setComplete] = useState('');
  const [content, setContent] = useState(true);
  const [errcontent, setErrContent] = useState(false);
  const [incorrect, setIncorrect] = useState('');
  const [FBoption, setFBoption] = useState('');
  const [htmlBody, setHtmlBody] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const navigate = useNavigate();
  const closePopup = () => {
    navigate('/'); // Change back to the original URL
  };

  useEffect(() => {
    const loadMailTemplate = async () => {
      const response = await fetch('./Unsubscribed.html');
      const htmlContent = await response.text();
      setHtmlBody(htmlContent);
    };

    loadMailTemplate();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (!validateEmail(email)) {
      setIncorrect('Please enter a valid email address');
      return;
    } else {
      setIncorrect('')
    }

    // if (FBoption.length < 10) {
    //   setIsValid(false);
    // } else {
    //   setIsValid(true);}

    // try {
    //   const response = await axios.post('http://localhost:3003/db/unsubscribe', {
    //     email: email,
    //     feedback: feedback,
    //     FBoption: FBoption,
    //     htmlBody: htmlBody, // Send the rich HTML content
    //   }); 
    try {
      // const response = await fetch('http://localhost:3003/db/unsubscribe', {

        const response = await fetch('https://noqu.in/db/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, feedback, FBoption, htmlBody }),
      });

      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json(); // Parse the error response
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json(); // Parse the success response
      setComplete(data.message); // Display success message
      setEmail(''); // Clear the input field
      setFeedback('')
      setContent(false)
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        alert('Unable to connect to the server. Please check your internet connection or try again later.');
      } else {
        // alert(error.message); // Display other error messages
        setErrormsg(error.message)
        setErrContent(true)
      }
    } finally {
      // Set loading to false when the request is complete
    }

  };


  return (
    <div className="popup-overlay">
      <div className="popup-background">
        <div className="popup-content">
          <div className="popup-close">
            <img src={logo} alt="" />
            <span onClick={closePopup}>&#215;</span>
          </div>

          {content && <>
            <h2 className='TAM_h1'>Unsubscribe</h2>
            <p>We’re sorry to see you go! By unsubscribing, you’ll no longer receive updates, news, and special offers from us. If there’s anything we can do to improve your experience, please let us know.</p>
            <form onSubmit={handleSubmit}>
              <div className="Unsub_feedback">
                <div className="Unsub_feedback_row">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                  <p>{incorrect}</p>
                </div>
                <div className="Unsub_feedback_row">
                  <label htmlFor="">Feedback</label>
                  {feedback === "Others" ?
                    <>
                      <textarea
                        type="textarea"
                        name="Feedback"
                        placeholder='Minmun 10 characters'
                        value={FBoption}
                        onChange={(event) => setFBoption(event.target.value)}
                        required
                      />
                      {!isValid && <p style={{ color: 'red', width: "200px" }} >Feedback must be at least 10 characters long.</p>}
                    </>
                    :
                    <select
                      name="Feedback"
                      id="FB"
                      value={feedback}
                      onChange={(event) => setFeedback(event.target.value)}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Too Frequent Emails">Too Frequent Emails</option>
                      <option value="Irrelevant Content">Irrelevant Content</option>
                      <option value="Excessive Promotion">Excessive Promotion</option>
                      <option value="Others">Others</option>
                    </select>
                  }

                </div>
                <button type='submit'>Submit</button>
                {errcontent && <div className="unsub_err">
                  <p>{errormsg}</p>
                </div>}
              </div>
            </form>
          </>
          }
          {complete && <div className="unsub_complete">
            <img src={unsubscribed} alt="" />
            <p>{complete}</p>
          </div>}
          {/* <p>You can resubscribe at any time by visiting our website. Thank you for being part of our community!</p> */}
        </div>
      </div>

    </div>
  )
}

export default Unsub_popup
