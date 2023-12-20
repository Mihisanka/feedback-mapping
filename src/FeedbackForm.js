// src/FeedbackForm.js
import React, { useState } from 'react';
import data from './data.json'

function FeedbackForm({ addFeedback }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFeedback(formData);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div>{}
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Feedback:</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit Feedback</button>
      </form>


    
      <div className=' d-flex'>{
        data.map((data, i) => (
          <div className='border m-2' key={i}>
            <h1>{data.title} </h1>
            <p>data.disriction</p>

          </div>
        ))
      }

      </div>
    </div>

    
  );
}

export default FeedbackForm;
