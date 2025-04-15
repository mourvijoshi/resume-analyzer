import React from "react";
import "./Certification.css";

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">Recommended Certifications</h2>
      <p className="certifications-description">
        Boost your resume with industry-recognized certifications.
      </p>
      <ul className="certifications-list">
        <li>
          <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">
            Coursera Certifications
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer">
            LinkedIn Learning
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">
            Udemy Professional Courses
          </a>
        </li>
        <li>
          <a href="https://grow.google/certificates/" target="_blank" rel="noopener noreferrer">
            Google Career Certificates
          </a>
        </li>
        <li>
          <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">
            edX Online Courses
          </a>
        </li>
        <li>
          <a href="https://www.ibm.com/training" target="_blank" rel="noopener noreferrer">
            IBM Professional Certifications
          </a>
        </li>
        <li>
          <a href="https://developer.microsoft.com/en-us/learn/certifications/" target="_blank" rel="noopener noreferrer">
            Microsoft Certifications
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Certifications;
