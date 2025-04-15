import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/Auth.css";
import { FaFileAlt, FaUserTie, FaHeadset } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Review your Resume ATS SCORE</h1>
          <p>with ATS Score calculator</p>
          <button className="btn">ATS SCORE</button>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="Resume" />
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <FaFileAlt className="feature-icon" />
          <h3>ENHANCE YOUR CV</h3>
          <p>We’re delighted to offer you an enhanced CV for your betterment</p>
        </div>
        <div className="feature">
          <FaUserTie className="feature-icon" />
          <h3>INTERVIEW PREP</h3>
          <p>Receive tips to improve your resume for interviews.</p>
        </div>
        <div className="feature">
          <FaHeadset className="feature-icon" />
          <h3>SUPPORT</h3>
          <p>Customer satisfaction is at the core of our values.</p>
        </div>
      </section>
    </div>
  );
};

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Log In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};
export { Home, Login, Signup };
