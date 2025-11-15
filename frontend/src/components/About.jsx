import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-slate-900 relative overflow-hidden"
    >
      <ParticleBackground />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "I'm a passionate Software Engineer pursuing B.Tech in Computer Science (Data Science) at Pranveer Singh Institute of Technology with a GPA of 7.99.",
              "I specialize in building scalable data-driven systems and user-focused applications using modern technologies like React.js, Node.js, Python, and MongoDB.",
              "With over 550+ problems solved on LeetCode and a 5-star rating on HackerRank, I'm constantly sharpening my problem-solving skills and exploring new technologies.",
            ].map((text, i) => (
              <motion.p
                key={i}
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="mailto:vibhorsharma0053@gmail.com"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} />
                vibhorsharma0053@gmail.com
              </motion.a>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.a
                href="tel:+917355506900"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                whileHover={{ x: 5 }}
              >
                <Phone size={20} />
                +91-7355506900
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: GraduationCap,
                    color: "purple",
                    title: "Education",
                    desc: "B.Tech CSE (Data Science)",
                    sub: "PSIT • GPA: 7.99",
                  },
                  {
                    icon: Briefcase,
                    color: "pink",
                    title: "Experience",
                    desc: "AI Intern",
                    sub: "TechSaksham (Microsoft & SAP)",
                  },
                  {
                    icon: Code,
                    color: "blue",
                    title: "Focus Areas",
                    desc: "DSA, Full Stack Development",
                    sub: "React, Node.js, Python, AI",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ x: 10 }}
                  >
                    <item.icon className={`text-${item.color}-400`} size={32} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.desc}</p>
                      <p className="text-gray-500 text-sm">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
