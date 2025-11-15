import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "vibhorsharma0053@gmail.com",
      href: "mailto:vibhorsharma0053@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "VibhorSharma0053",
      href: "https://github.com/VibhorSharma0053",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Vibhor Sharma",
      href: "https://linkedin.com/in/vibhor-sharma-701ab0259/",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-purple-900/60 to-slate-900 flex items-center relative overflow-hidden"
    >
      <ParticleBackground />

      <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.p
            className="text-gray-300 text-center text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgb(168 85 247)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                }}
              >
                <method.icon className="text-purple-400" size={32} />
                <span className="text-white font-semibold">{method.label}</span>
                <span className="text-gray-400 text-sm text-center break-all">
                  {method.value}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="tel:+917355506900"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={20} />
              +91-7355506900
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
