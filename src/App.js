import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/Home.css";
import "./styles/Auth.css";
import "./styles/Jobs.css";
import { FaFileAlt, FaUserTie, FaHeadset, FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📘</div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/jobs">JOB</Link></li>
        <li><Link to="/deals">BEST DEALS</Link></li>
        <li><Link to="/certifications">CERTIFICATIONS</Link></li> {/* Updated Route */}
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/signup" className="btn">Sign Up</Link>
        <Link to="/login" className="btn">Log In</Link>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
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
        <div className="feature">
          <FaBriefcase className="feature-icon" />
          <h3>FIND YOUR DREAM JOB</h3>
          <p>Explore job opportunities that align with your skills.</p>
        </div>
      </section>
    </div>
  );
};

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
            <div className="job-box">
              <h5>📄 CV Build</h5>
              <p>We will design a job-awarding professional Curriculum Vitae</p>
            </div>
            <div className="job-box">
              <h5>🎓 Courses</h5>
              <p>We offer online courses that will help you build your portfolio</p>
            </div>
            <div className="job-box">
              <h5>📢 Seminars</h5>
              <p>We organize informative seminars to boost your job prospects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="certifications-container">
      <Navbar />
      <section className="certifications-content">
        <h2>Recommended Certifications</h2>
        <p>Boost your resume with industry-recognized certifications.</p>
        <ul>
          <li>✔ Coursera Certifications</li>
          <li>✔ LinkedIn Learning</li>
          <li>✔ Udemy Professional Courses</li>
          <li>✔ Google Career Certificates</li>
        </ul>
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/certifications" element={<Certifications />} /> {/* Added new route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;