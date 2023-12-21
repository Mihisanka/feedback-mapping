/* src/App.js
import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackCard from './FeedbackCard';

function App() {
  const [feedbackList, setFeedbackList] = useState([]);

  const addFeedback = (newFeedback) => {
    const feedbackObject = {
      id: feedbackList.length + 1, // You can generate a unique ID using a library like uuid
      ...newFeedback,
    };

    setFeedbackList([...feedbackList, feedbackObject]);
  };

  return (
    <div className="App">
      <FeedbackForm addFeedback={addFeedback} />
      {feedbackList.length > 0 && (
        <div>
          <h2>Feedback Received:</h2>
          {feedbackList.map((feedback, index) => (
            <FeedbackCard key={index} feedback={feedback} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;*/

// src/App.js
import React, { useState, useEffect } from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackCard from './FeedbackCard';

function App() {
  const [feedbackList, setFeedbackList] = useState([]);

  // Load existing feedback data from local storage on component mount
  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedbackList')) || [];
    setFeedbackList(storedFeedback);
  }, []);

  // Save feedback data to local storage whenever feedbackList changes
  useEffect(() => {
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  }, [feedbackList]);

  const addFeedback = (newFeedback) => {
    const feedbackObject = {
      id: feedbackList.length + 1, // You can use a more robust ID generation method
      ...newFeedback,
    };

    setFeedbackList([...feedbackList, feedbackObject]);
  };

  return (
    <div className="App">
      <FeedbackForm addFeedback={addFeedback} />
      {feedbackList.length > 0 && (
        <div>
          <h2>Feedback Received:</h2>
          {feedbackList.map((feedback, index) => (
            <FeedbackCard key={index} feedback={feedback} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

