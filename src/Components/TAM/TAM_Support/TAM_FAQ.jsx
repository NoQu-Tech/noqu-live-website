import React, { useState } from 'react';
import "./TAM_FAQ.css"

function TAM_FAQ() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const questions = [
      { id: 1, question: "1.What makes NOQU Time Attendance system stand apart from the rest?", answer: "Our system incorporates cutting-edge features such as Artificial Intelligence, Live Location Tracking, and more to provide a comprehensive solution" },
      { id: 2, question: '2. How can I get a demo or trial of your system ?', answer: 'You can request a demo or trial by reaching out to our sales team via the contact page or the provided contact information.' },
      { id: 3, question: '3. Do you offer customization to suit our specific business needs?', answer: 'Yes, we provide customization options to tailor our system to your unique requirements.' },
      { id: 4, question: '4. What types of support and training do you offer to help us get started?', answer: 'NoQu TAM offer various support options, includingtraining videos and customer support, to ensure you make the most of our system.' },
      { id: 5, question: '5. What services do you offer alongside your Time Attendance management system ?', answer: 'We offer services to set things up, integration,customization, and ongoing support to ensure a seamless experience.' },
      { id: 6, question: '6. Can you assist with the migration of our existing attendance data into your system?', answer: 'Yes, our team can help you migrate existing data to our system to ensure a smooth transition.' },
      { id: 7, question: '7. Is your system cloud-based, or do we need to host it on our own servers ?', answer: 'NoQu TAM system can be hosted in the AWS cloud for ease of use, but we also provide on-premises options for organizations with specific requirements.' },
      { id: 8, question: '8. How does Artificial Intelligence (AI) benefit our attendance management ?', answer: 'AI enhances accuracy and brings in the aspect of facial recognition for attendance marking and predictive analytics for attendance trends.' },
      { id: 9, question: '9. Can you explain how Geo Fencing works and its advantages for attendance management?', answer: 'Geo Fencing creates virtual boundaries to track attendance based on location, ensuring accurate attendance records and enhancing security.' },
      { id: 10, question: '10. What is Workflow Integration, and how can it improve our attendance management processes ?', answer: 'Workflow Integration enables seamless communication, requests and approvals between pre-defined hierarchy levels in the organization and all the other aspects of workgroup management, improving data flow and control efficiency.' },
      { id: 11, question: '11. What are the key advantages of having Roles and Permissions in your system ?', answer: 'Roles and Permissions allow you to control user access, ensuring data security and limiting access to authorized personnel.' },
      { id: 12, question: '12. How does Offline Attendance Tracking work, and when is it useful?', answer: 'Offline Attendance Tracking allows you to record attendance without an internet connection, and auto-syncs when the internet is back, ensuring that attendance data is always up-to-date.' },
      { id: 13, question: '13.Tell us more about the Reports and Dashboard features and how they aid decision-making?', answer: 'Reports and Dashboards provide actionable insights through customizable visualizations, enabling informed decision-making based on attendance data.' },
      { id: 14, question: '14. Do we need to purchase additional hardware, such as biometric devices, to use your Time Attendance management system ?', answer: 'No, NoQu TAM utilizes advanced technologies such as facial recognition and GPS tracking, making it a cost-effective and hassle-free solution for attendance management.' },

    ];
  
    const handleSelectQuestion = (id) => {
      setSelectedQuestion(selectedQuestion === id ? null : id);
    };
  
    return (
        <div className="TAM_FAQ">
            <h1 className='TAM_h1'>TAM FAQs</h1>
            <div className='TAM_FAQ-container'>
              <div className="TAM_FAQ-row">
              {questions.map((question) => (
                <div key={question.id} onClick={() => handleSelectQuestion(question.id)}>
                    <div className={selectedQuestion === question.id ? 'TAM_FAQ_question_after' : 'TAM_FAQ_question_before'}>
                        <p>{question.question}</p>
                        <h5>+</h5>
                    </div>
                    {selectedQuestion === question.id && 
                    <div className='TAM_FAQ_answer_after'><p>{question.answer}</p></div>}
                </div>
                ))}
              </div>
            </div>
        </div>
    );
  }

export default TAM_FAQ;



                                                            