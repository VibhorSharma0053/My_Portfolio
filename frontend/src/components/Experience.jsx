import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-purple-500/30 pl-8 pb-12">
            <motion.div
              className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(168, 85, 247, 0.5)",
              }}
            >
              <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    AI Intern
                  </h3>
                  <p className="text-purple-400 font-semibold">
                    TechSaksham (Microsoft & SAP)
                  </p>
                </motion.div>
                <motion.span
                  className="text-gray-100 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Dec 2024 - Jan 2025
                </motion.span>
              </div>

              <ul className="space-y-3 text-gray-300">
                {[
                  "Completed hands-on AI internship under Microsoft SAP CSR initiative",
                  "Built mini-projects applying AI concepts to real-world use cases",
                  "Improved problem-solving adaptability through practical implementations",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
