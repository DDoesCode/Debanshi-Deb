import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { Wrench, PenTool, Code2, Bot } from "lucide-react";

const services = [
  {
    icon: <PenTool size={32} />,
    title: "Graphic Design",
    description: "Logos, flyers, branding kits, social media creatives, and more using modern design tools.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Web Development",
    description: "Responsive websites and interactive interfaces built with React, Tailwind, and animations.",
  },
  {
    icon: <Bot size={32} />,
    title: "AI Content",
    description: "Creating visuals, voiceovers, or avatars using AI tools like Midjourney, Synthesia & ElevenLabs.",
  },
  {
    icon: <Wrench size={32} />,
    title: "Tech Consulting",
    description: "Helping clients pick the right tools, structure their product ideas, and prototype fast.",
  },
];

const Services = () => {
  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
