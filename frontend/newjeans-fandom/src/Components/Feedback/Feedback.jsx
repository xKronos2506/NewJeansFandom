//import modules
import React, { useState } from 'react';
import './feedback.css';

const Feedback = () => { //feedback component with form inputs
  // feedback js code to handle form submission and management
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

  const handleChange = (e) => { //handle form submission
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { //convert form data towards database
    e.preventDefault();
    const { name, email, feedback } = formData;

    if (name && email && feedback) {
      try { // send data to server using fetch API
        const response = await fetch('http://localhost:4000/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, feedback }),
        });

        const data = await response.json(); //

        if (response.ok) { // if statements to show message and errors for feedback
          alert('Feedback submitted successfully!');
          setFormData({ name: '', email: '', feedback: '' });
        } else {
          alert('Failed to submit feedback. Please try again later.');
          console.error('Error:', data);
        }
      } catch (err) {
        console.error('Error:', err);
        alert('Failed to submit feedback. Please try again later.');
      }
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return ( //feeback component
    <div className='feedback'>
      <div className="feedback-cont">
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="feedback-form">
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Enter your name...' required />
          </div>
          <div className="feedback-form">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter your email...' required />
          </div>
          <div className="feedback-form">
            <label htmlFor="feedback">What do you think of the website?</label>
            <textarea name="feedback" id="feedback" value={formData.feedback} onChange={handleChange} placeholder='Enter your feedback...' required></textarea>
          </div>
          <div className="feedback-form">
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;