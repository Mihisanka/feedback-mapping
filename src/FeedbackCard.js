// src/FeedbackCard.js
import React from 'react';

function FeedbackCard({ feedback }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h3>{feedback.name}</h3>
      <p>Email: {feedback.email}</p>
      <p>Feedback: {feedback.feedback}</p>
    </div>
  );
}

export default FeedbackCard;
