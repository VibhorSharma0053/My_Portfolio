import { ExternalLink, Code, Award, Star, FileText } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Achievements = () => {
  const achievements = [
    {
      icon: <Star className="text-yellow-400" size={32} />,
      title: "5 Star at HackerRank",
      description:
        "Achieved 5-star rating demonstrating strong problem-solving skills",
      link: "https://www.hackerrank.com/profile/DS2A1641540122",
    },
    {
      icon: <Code className="text-green-400" size={32} />,
      title: "550+ LeetCode Problems",
      description: "Successfully solved over 550 coding challenges",
      link: "https://leetcode.com/VibhorSharma00/",
    },
    {
      icon: <Award className="text-purple-400" size={32} />,
      title: "Multiple Certifications",
      description:
        "JavaScript, CSS, Python, React JS, Node JS from HackerRank & Scaler",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="achievements"
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
          Achievements & Certifications
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/20 text-center"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
              }}
            >
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400 mb-4">{achievement.description}</p>
              {achievement.link && (
                <motion.a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
                  whileHover={{ x: 5 }}
                >
                  View Profile <ExternalLink size={16} />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.h3
            className="text-2xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "JavaScript (Basic) - HackerRank",
              "CSS (Basic) - HackerRank",
              "Python (Basic) - HackerRank",
              "Operating System - Scaler",
              "JavaScript - Scaler",
              "React JS - Scaler",
              "Node JS - Scaler",
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4 border border-purple-500/20"
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(168, 85, 247, 0.5)",
                  x: 10,
                }}
              >
                <FileText className="text-purple-400" size={24} />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Achievements;
