import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>About Me</h1>

      <section>
        <h2>💙 My Passions</h2>
        <p>
          I'm passionate about crafting visually engaging experiences using design and tech. Whether it’s developing sleek interfaces or generating AI-driven visuals, I love blending creativity with logic.
        </p>
      </section>

      <section>
        <h2>⚙️ Work Ethic</h2>
        <p>
          I’m detail-oriented, disciplined, and love collaborating with others. I believe in staying curious and constantly upskilling to deliver clean, user-friendly, and scalable solutions.
        </p>
      </section>

      <section>
        <h2>📜 Certifications</h2>
        <ul>
          <li>Meta Front-End Developer – Coursera</li>
          <li>AI for Everyone – Andrew Ng</li>
          <li>GitHub Copilot Power User – GitHub</li>
        </ul>
      </section>

      <section>
        <h2>💼 Experience</h2>
        <p>
          Freelance web and UI designer since 2022. I've worked on branding kits, landing pages, and interactive portfolios for artists, startups, and digital agencies.
        </p>
      </section>

      <section>
        <h2>🎓 Education</h2>
        <p>
          B.Tech in Computer Science & Engineering, 2025<br />
          Focused on HCI, AI tools, and creative technology.
        </p>
      </section>
    </motion.div>
  );
};

export default About;
