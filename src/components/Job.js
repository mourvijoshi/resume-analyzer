import React from "react";
import "../styles.css";

function Job() {
  return (
    <div className="job-page">
      <div className="job-header">
        <h1>Only 3 Steps to Get Your Dream Job!</h1>
      </div>
      <div className="job-content">
        <div className="job-text">
          <h2>What we offer:</h2>
          <h3>Solutions that will take your recruitment to the next level!</h3>
          <p>We build effective strategies that will help you reach employers worldwide.</p>

          <div className="job-step">
            <div className="step-box light-blue">
              <h4>📄 CV Build</h4>
              <p>We will design a job-awarding professional Curriculum Vitae.</p>
            </div>
            <div className="step-box dark-blue">
              <h4>📚 Courses</h4>
              <p>We offer online courses that will help you build your portfolio.</p>
            </div>
            <div className="step-box light-blue">
              <h4>🎤 Seminars</h4>
              <p>We will design a job-awarding professional Curriculum Vitae.</p>
            </div>
          </div>
        </div>
        <div className="job-image">
          <img src="/job-image.png" alt="Job Process" />
        </div>
      </div>
    </div>
  );
}

export default Job;
