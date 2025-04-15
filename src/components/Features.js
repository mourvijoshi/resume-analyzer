import React from 'react';
import '../styles.css'; 

function Features() {
  return (
    <div className="features">
      <div className="feature-box">
        <h3>AI Analysis</h3>
        <p>Our AI scans and suggests improvements.</p>
      </div>
      <div className="feature-box">
        <h3>Instant Feedback</h3>
        <p>Receive quick suggestions for your resume.</p>
      </div>
      <div className="feature-box">
        <h3>Job Matching</h3>
        <p>Find the best job based on your skills.</p>
      </div>
    </div>
  );
}

export default Features;
