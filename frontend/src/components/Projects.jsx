import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Wrench,
  Award,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  ChevronDown,
  Star,
  FileText,
  Sparkles,
  Zap,
  Target
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Projects = () => {
  const projects = [
    {
      name: "HireReady",
      status: "Ongoing",
      tech: ["React.js", "FastAPI", "MongoDB", "AI"],
      description: "Full-stack placement prep platform with MCQ practice, coding problems, AI interviews, and resource management.",
      highlights: [
        "Designed scalable APIs and admin workflows",
        "Simulating real-world recruitment processes",
        "AI-powered interview simulation"
      ],
      link: "https://github.com/Kashish2504/HireReady"
    },
    {
      name: "OfflineIQ",
      status: "Apr 2025",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CouchDB"],
      description: "Offline-first education platform enabling teachers to assign assessments and students to attempt them without internet.",
      highlights: [
        "Local-remote DB sync implementation",
        "Offline data architecture",
        "Real-time role-based dashboards"
      ],
      link: "https://github.com/VibhorSharma0053/OfflineIQ"
    },
    {
      name: "Discover India",
      status: "Feb 2024",
      tech: ["HTML", "CSS", "JavaScript", "GSAP", "Bootstrap"],
      description: "Interactive website showcasing India's heritage using animations and responsive design techniques.",
      highlights: [
        "GSAP scroll-based animations",
        "Improved frontend design skills",
        "Visual storytelling techniques"
      ],
      link: "https://github.com/VibhorSharma0053/Discover-India-miniProject-1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-slate-900 relative overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-purple-500/20"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)"
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <motion.h3
                    className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.name}
                  </motion.h3>
                  <motion.span
                    className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.status}
                  </motion.span>
                </div>

                <p className="text-gray-400 mb-4 min-h-[60px]">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full mt-2"></div>
                      <span>{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-2 py-1 bg-slate-700 text-gray-300 rounded"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold"
                  whileHover={{ x: 5 }}
                >
                  View Project <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;