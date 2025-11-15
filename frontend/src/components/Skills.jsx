import { Code, Database, Wrench, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Skills = () => {
  const skills = {
    Languages: ["Python", "JavaScript", "C", "SQL"],
    Frontend: ["React.js", "Tailwind CSS", "HTML", "CSS", "GSAP"],
    Backend: ["Node.js", "Express.js", "FastAPI"],
    Database: ["MongoDB", "MySQL", "CouchDB", "PouchDB"],
    Tools: ["Git", "GitHub", "VS Code", "PyCharm", "Postman"],
    "Soft Skills": [
      "Collaboration",
      "Time Management",
      "Problem Solving",
      "Adaptability",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900 relative overflow-hidden"
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
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h3
                className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                {category === "Languages" && <Code size={24} />}
                {category === "Database" && <Database size={24} />}
                {category === "Tools" && <Wrench size={24} />}
                {category === "Frontend" && <Sparkles size={24} />}
                {category === "Backend" && <Zap size={24} />}
                {category === "Soft Skills" && <Target size={24} />}
                {category}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-gray-300 rounded-full text-sm border border-purple-500/30"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1, borderColor: "rgb(168 85 247)" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
