import React from "react";
import Navbar from "./Navbar";
import "../styles/Jobs.css";

const Jobs = () => {
  return (
    <div className="jobs-container">
      <Navbar />
      <section className="jobs-content">
        <h2>Only 3 Steps to Get Your Dream Job!</h2>
        <div className="job-offer-section">
          <h3>What we offer:</h3>
          <h4>Solutions that will take your recruitment to the next level!</h4>
          <p>We build effective strategies that will help you reach employers worldwide.</p>
          <div className="job-options">
            <div className="job-box light-blue">
              <h5>📄 CV Build</h5>
              <p>We will design a job awarding professional Curriculum Vitae</p>
            </div>
            <div className="job-box dark-blue">
              <h5>🎓 Courses</h5>
              <p>We offer online courses that will help you build your portfolio</p>
            </div>
            <div className="job-box light-blue">
              <h5>📢 Seminars</h5>
              <p>We will design a job awarding professional Curriculum Vitae</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
