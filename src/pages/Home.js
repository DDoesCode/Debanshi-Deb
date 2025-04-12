// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="intro-text">
          <h1>Hi, I’m <span className="highlight">Debanshi</span></h1>
          <p>
            I’m passionate about building innovative, user-centered experiences
            that fuse creativity with technology. My mission is to create
            meaningful digital products that make a difference.
          </p>
          <div className="hero-buttons">
            <button>Hire Me</button>
            <button className="outlined">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/avatar.jpg" alt="avatar" className="w-28 h-28 rounded-full shadow-lg" />
        </div>
      </section>

      {/* <section className="about">
        <h2>About Me</h2>
        <p>
          I’m a driven developer and creative thinker who loves solving problems
          and turning ideas into code. Whether I’m designing interfaces or coding
          backend systems, I always bring my passion for clean, impactful work.
        </p>
      </section>

      <section className="passions">
        <h2>My Passions</h2>
        <ul>
          <li>🚀 Building smart user interfaces</li>
          <li>🎨 Blending design and technology</li>
          <li>📚 Lifelong learning in AI & web dev</li>
        </ul>
      </section>

      <section className="work-ethics">
        <h2>Work Ethic</h2>
        <p>
          I believe in consistency, collaboration, and curiosity. I work well both
          independently and in teams, always ensuring the product is aligned with
          user needs and business goals.
        </p>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Meta Front-End Developer Certificate</li>
          <li>AI for Everyone by Andrew Ng</li>
          <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li><strong>Frontend Intern</strong> @ Webify (Jun 2024 - Aug 2024)</li>
          <li><strong>Freelance Web Dev</strong> – Built 6+ responsive sites for clients</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          B.Tech in Computer Science - VIT, 2026 <br />
          GPA: 8.6
        </p>
      </section> */}
    </div>
  );
};

export default Home;
